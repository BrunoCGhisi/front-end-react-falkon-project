import {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";

import { DarkTheme, LightTheme } from "../themes";

const ThemeContext = createContext({});

export const useAppThemeContext = () => {
    return useContext(ThemeContext);
};

export const AppThemeProvider = ({ children }) => {
    const [themeName, setThemeName] = useState("darkTheme");

    const toggleTheme = useCallback(() => {
        setThemeName((oldThemeName) =>
            oldThemeName === "lightTheme"
                ? "darkTheme"
                : "lightTheme"
        );
    }, []);

    const theme = useMemo(() => {
        return themeName === "lightTheme"
            ? LightTheme
            : DarkTheme;
    }, [themeName]);

    return (
        <ThemeContext.Provider
            value={{
                themeName,
                toggleTheme,
            }}
        >
            <ThemeProvider theme={theme}>
                <CssBaseline />

                <Box
                    sx={{
                        minHeight: "100vh",
                        backgroundColor: theme.palette.background.default,
                    }}
                >
                    {children}
                </Box>
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};