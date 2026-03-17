import { cookies } from "next/headers";

const DEFAULT_SESSION_COOKIE_NAME = "JSESSIONID";

export function getSessionCookieName() {
    return process.env.AUTH_SESSION_COOKIE_NAME || DEFAULT_SESSION_COOKIE_NAME;
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
    const sessionCookie = await getSessionCookie();

    if (!sessionCookie?.value) {
        return false;
    }

    return validateSessionCookie(sessionCookie.value);
}
