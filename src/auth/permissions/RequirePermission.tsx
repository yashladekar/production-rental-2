"use client";

import { useEffect, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/store/hooks";

type RequirePermissionProps = {
    children: React.ReactNode;
    code: string | string[];
    redirectTo?: string;
};

const normalizeCodes = (codes: string | string[]) =>
    Array.isArray(codes) ? codes : [codes];

export default function RequirePermission({
    children,
    code,
    redirectTo = "/forbidden",
}: RequirePermissionProps) {
    const router = useRouter();
    const { user, loading } = useAppSelector((state) => state.auth);

    const hasAccess = useMemo(() => {
        if (!user) return false;

        const required = normalizeCodes(code);
        return required.every((requiredCode) =>
            user.authorizationCodes?.includes(requiredCode)
        );
    }, [code, user]);

    useEffect(() => {
        if (loading || !user) return;

        if (!hasAccess) {
            router.replace(redirectTo);
        }
    }, [loading, user, hasAccess, router, redirectTo]);

    if (loading || !user || !hasAccess) {
        return null;
    }

    return children;
}
