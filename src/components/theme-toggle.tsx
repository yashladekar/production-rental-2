"use client";

import Button from "@mui/material/Button";
import { useThemeMode } from "./theme-provider-client";

export default function ThemeToggle() {
    const { mode, toggleMode } = useThemeMode();

    return (
        <Button
            variant="outlined"
            size="small"
            onClick={toggleMode}
            sx={{
                position: "fixed",
                top: 16,
                right: 16,
                zIndex: 1300,
                textTransform: "none",
                bgcolor: "background.paper",
            }}
        >
            {mode === "dark" ? "Use light theme" : "Use dark theme"}
        </Button>
    );
}
