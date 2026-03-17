import { cookies } from "next/headers";

const DEFAULT_JWT_COOKIE_NAME = "JWT_TOKEN";
const DEFAULT_SESSION_COOKIE_NAME = "JSESSIONID";

export function getJwtCookieName() {
    return process.env.AUTH_JWT_COOKIE_NAME || DEFAULT_JWT_COOKIE_NAME;
}

export function getSessionCookieName() {
    return process.env.AUTH_SESSION_COOKIE_NAME || DEFAULT_SESSION_COOKIE_NAME;
}

function decodeBase64Url(value: string) {
    const normalized = value.replace(/-/g, "+").replace(/_/g, "/");
    const padded = normalized.padEnd(Math.ceil(normalized.length / 4) * 4, "=");

    if (typeof atob === "function") {
        return atob(padded);
    }

    return Buffer.from(padded, "base64").toString("utf-8");
}

export function hasUsableJwtToken(token?: string) {
    if (!token) {
        return false;
    }

    try {
        const [, payload] = token.split(".");
        if (!payload) {
            return false;
        }

        const decoded = JSON.parse(decodeBase64Url(payload)) as { exp?: number };
        if (!decoded.exp) {
            return true;
        }

        return decoded.exp * 1000 > Date.now();
    } catch {
        return false;
    }
}

export async function getJwtCookie() {
    const cookieStore = await cookies();
    return cookieStore.get(getJwtCookieName());
}

export async function getSessionCookie() {
    const cookieStore = await cookies();
    return cookieStore.get(getSessionCookieName());
}

async function validateSessionCookie(cookieValue: string) {
    const validateUrl = process.env.AUTH_VALIDATE_URL;

    if (!validateUrl) {
        return false;
    }

    try {
        const response = await fetch(validateUrl, {
            method: "GET",
            headers: {
                Cookie: `${getSessionCookieName()}=${cookieValue}`,
            },
            cache: "no-store",
        });

        return response.ok;
    } catch {
        return false;
    }
}

export async function hasActiveSession() {
    const jwtCookie = await getJwtCookie();
    if (hasUsableJwtToken(jwtCookie?.value)) {
        return true;
    }

    const sessionCookie = await getSessionCookie();

    if (!sessionCookie?.value) {
        return false;
    }

    return validateSessionCookie(sessionCookie.value);
}
