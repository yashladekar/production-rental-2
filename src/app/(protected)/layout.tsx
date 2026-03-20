// import { redirect } from "next/navigation";
// import { Box, Typography } from "@mui/material";

// import { hasActiveSession } from "@/auth/session";
// import LogoutButton from "@/components/logout-button";
// import MainContainer from "@/components/molecules/main-container";
// import AppHeader from "@/components/organism/app-header";
// import Sidebar from "@/components/organism/sidebar";
// export default async function RootLayout({
//     children,
// }: Readonly<{
//     children: React.ReactNode;
// }>) {
//     const authenticated = await hasActiveSession();

//     if (!authenticated) {
//         redirect("/login");
//     }

//     return (
//         <Box sx={{ minHeight: "100vh", bgcolor: "background.default", color: "text.primary" }}>
//             <AppHeader open={open} onDrawerOpen={() => setOpen(true)} />
//             <Sidebar open={open} onDrawerClose={() => setOpen(false)} />
//             <MainContainer>
//                 {children}
//             </MainContainer>
//             {/* </Box> */}
//         </Box>
//     );
// }

import { redirect } from "next/navigation";
import { hasActiveSession } from "@/auth/session";
import ProtectedShell from "@/components/organism/protected-shell";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const authenticated = await hasActiveSession();

    if (!authenticated) {
        redirect("/login");
    }

    return <ProtectedShell>{children}</ProtectedShell>;
}