import React, { useContext } from "react";

export const ThemeContext = React.createContext({
    themeMode : "light",
    changeTheme : () => {}
});

export const ThemeContextProvider = ThemeContext.Provider;

//Custom Hook
const useTheme = () => {
    return useContext(ThemeContext);
}

export default useTheme;