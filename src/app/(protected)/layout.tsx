import { redirect } from "next/navigation";

import { hasActiveSession } from "@/auth/session";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const authenticated = await hasActiveSession();

    if (!authenticated) {
        redirect("/login");
    }

    return (
        <div>
            {children}
        </div>
    );
}
