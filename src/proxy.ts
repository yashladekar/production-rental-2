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

export function proxy(req: NextRequest) {
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

    const jsession = req.cookies.get(getSessionCookieName());

    if (!jsession) {
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
