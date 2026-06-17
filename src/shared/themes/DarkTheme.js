import { createTheme } from "@mui/material";
import { brown, yellow} from "@mui/material/colors";


export const DarkTheme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: yellow["A400"],
            optional: brown["800"]
        },

        background: {
            default: "#121212",
            paper: "#1E1E1E",
        },
    },
});