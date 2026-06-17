import { createTheme } from "@mui/material";
import {amber, yellow} from "@mui/material/colors";

export const LightTheme = createTheme({
    palette: {
        mode: "light",

        primary: {
            main: yellow["A400"],
            optional: amber["A200"]
        },

        background: {
            default: "#F5F5F5",
            paper: "#FFFFFF",
        },
    },
});