"use client";

import { CssBaseline } from "@mui/material";
import type { PaletteMode } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getTheme } from "../theme";

type ThemeModeContextValue = {
    mode: PaletteMode;
    toggleMode: () => void;
};

const ThemeModeContext = createContext<ThemeModeContextValue | null>(null);

const STORAGE_KEY = "app-theme-mode";

function getInitialMode(): PaletteMode {
    if (typeof window === "undefined") {
        return "light";
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
        return stored;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeProviderClient({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<PaletteMode>("light");

    useEffect(() => {
        setMode(getInitialMode());
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute("data-theme", mode);
        window.localStorage.setItem(STORAGE_KEY, mode);
    }, [mode]);

    const theme = useMemo(() => getTheme(mode), [mode]);

    const value = useMemo(
        () => ({
            mode,
            toggleMode: () => setMode((prev) => (prev === "light" ? "dark" : "light")),
        }),
        [mode],
    );

    return (
        <ThemeModeContext.Provider value={value}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeModeContext.Provider>
    );
}

export function useThemeMode() {
    const context = useContext(ThemeModeContext);
    if (!context) {
        throw new Error("useThemeMode must be used within ThemeProviderClient");
    }

    return context;
}
