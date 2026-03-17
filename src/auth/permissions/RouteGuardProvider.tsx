"use client";

import { useEffect, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";

type RoutePermissions = Record<string, string | string[]>;

type RouteGuardProviderProps = {
    children: React.ReactNode;
    routePermissions: RoutePermissions;
    redirectTo?: string;
};

const normalizeCodes = (codes: string | string[]) =>
    Array.isArray(codes) ? codes : [codes];

export default function RouteGuardProvider({
    children,
    routePermissions,
    redirectTo = "/forbidden",
}: RouteGuardProviderProps) {
    const router = useRouter();
    const pathname = usePathname();
    const { user, loading } = useAppSelector((state) => state.auth);

    const matchedCodes = useMemo(() => {
        let matchedKey: string | null = null;

        for (const key of Object.keys(routePermissions)) {
            if (pathname === key || pathname.startsWith(`${key}/`)) {
                if (!matchedKey || key.length > matchedKey.length) {
                    matchedKey = key;
                }
            }
        }

        return matchedKey ? routePermissions[matchedKey] : null;
    }, [pathname, routePermissions]);

    const hasAccess = useMemo(() => {
        if (!matchedCodes || !user) return true;

        const required = normalizeCodes(matchedCodes);
        return required.every((code) => user.authorizationCodes?.includes(code));
    }, [matchedCodes, user]);

    useEffect(() => {
        if (!matchedCodes || loading || !user) return;

        if (!hasAccess) {
            router.replace(redirectTo);
        }
    }, [matchedCodes, loading, user, hasAccess, router, redirectTo]);

    if (matchedCodes && user && !loading && !hasAccess) {
        return null;
    }

    return children;
}
