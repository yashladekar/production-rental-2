"use client";

import { Button } from "@mui/material";

export default function LogoutButton() {
    function handleLogout() {
        const logoutUrl = process.env.NEXT_PUBLIC_LOGOUT_URL;

        if (!logoutUrl) {
            console.error("Missing NEXT_PUBLIC_LOGOUT_URL");
            return;
        }

        window.location.href = logoutUrl;
    }

    return (
        <Button
            variant="outlined"
            color="inherit"
            onClick={handleLogout}
            sx={{
                borderRadius: 2,
                textTransform: "none",
            }}
        >
            Logout
        </Button>
    );
}
