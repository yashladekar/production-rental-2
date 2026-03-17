import { createTheme } from "@mui/material/styles";
import type { PaletteMode } from "@mui/material";

export function getTheme(mode: PaletteMode) {
    return createTheme({
        palette: {
            mode,
        },
        typography: {
            fontFamily: "var(--font-geist-sans), sans-serif",
        },
    });
}