import {amber, brown, yellow} from "@mui/material/colors";
import {createTheme} from "@mui/material";

export const LightTheme = createTheme({
    palette: {
        mode: "light",

        primary: {
            main: amber["500"],
            contrastText: "#000000",
            optional: yellow["300"]
        },

        background: {
            default: "#F5F5F5",
            paper: "#FFFFFF",
        },
    },

    components: {
        MuiButton: {
            defaultProps: {
                variant: "contained",
                color: "primary",
            },
        },
    },
});