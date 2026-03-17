import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { auditLog } from "./audit/audit-logger";
import { getSessionCookieName } from "./auth/session";

function getClientIp(req: NextRequest): string | undefined {
    const xForwardedFor = req.headers.get("x-forwarded-for");
    if (xForwardedFor) {
        return xForwardedFor.split(",")[0]?.trim();
    }

    return req.headers.get("x-real-ip") ?? undefined;
}

async function hasValidSession(req: NextRequest) {
    const sessionCookieName = getSessionCookieName();
    const sessionCookie = req.cookies.get(sessionCookieName);

    if (!sessionCookie?.value) {
        return false;
    }

    const validateUrl = process.env.AUTH_VALIDATE_URL;
    if (!validateUrl) {
        return false;
    }

    try {
        const response = await fetch(validateUrl, {
            method: "GET",
            headers: {
                Cookie: `${sessionCookieName}=${sessionCookie.value}`,
            },
            cache: "no-store",
        });

        return response.ok;
    } catch {
        return false;
    }
}

export async function proxy(req: NextRequest) {
    const pathname = req.nextUrl.pathname;
    if (/\.[^/]+$/.test(pathname)) {
        return NextResponse.next();
    }

    const publicPaths = [
        "/login",
        "/api/auth",
        "/favicon.ico",
        "/manifest.json",
        "/_next",
        "/static",
        "/public",
    ];

    const isPublicRoute = publicPaths.some(
        (path) => pathname === path || pathname.startsWith(`${path}/`)
    );

    if (isPublicRoute) {
        return NextResponse.next();
    }

    const authenticated = await hasValidSession(req);

    if (!authenticated) {
        auditLog("ACCESS_DENIED", { ip: getClientIp(req), path: pathname })

        if (pathname.startsWith("/api")) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/((?!_next|static|favicon.ico|manifest.json).*)"],
}
