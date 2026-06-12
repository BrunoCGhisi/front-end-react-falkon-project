
import './App.css'
import {Button, ThemeProvider} from "@mui/material";
import {DrawerMenu} from "./shared/components/menu/index.js";
import {AppThemeProvider} from "./shared/contexts/AppThemeProvider.jsx";

function App() {
  return (
    <>
        <AppThemeProvider>
            <DrawerMenu />
            <Button variant="contained">
                Contained
            </Button>
        </AppThemeProvider>
    </>
  )
}

export default App
