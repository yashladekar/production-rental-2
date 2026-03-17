import { redirect } from "next/navigation";
import { Box, Typography } from "@mui/material";

import { hasActiveSession } from "@/auth/session";
import LogoutButton from "@/components/logout-button";

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
        <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
            <Box
                sx={{
                    px: 3,
                    py: 2,
                    borderBottom: 1,
                    borderColor: "divider",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Typography variant="h6" fontWeight={700}>
                    {process.env.NEXT_PUBLIC_APPLICATION_NAME}
                </Typography>
                <LogoutButton />
            </Box>
            <Box component="main" sx={{ p: 3 }}>
                {children}
            </Box>
        </Box>
    );
}
