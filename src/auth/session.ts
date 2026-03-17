import { cookies } from "next/headers";

const DEFAULT_SESSION_COOKIE_NAME = "JSESSIONID";

export function getSessionCookieName() {
    return process.env.AUTH_SESSION_COOKIE_NAME || DEFAULT_SESSION_COOKIE_NAME;
}

export async function getSessionCookie() {
    const cookieStore = await cookies();
    return cookieStore.get(getSessionCookieName());
}

export async function hasActiveSession() {
    const sessionCookie = await getSessionCookie();
    return Boolean(sessionCookie?.value);
}
