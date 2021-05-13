import {createContext} from "react";

const ThemeProvider = createContext({
    theme: {},
    setTheme: () => {}
})

export default ThemeProvider;