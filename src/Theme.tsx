/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider, Mode } from "styled-components";
import { ThemeDark, ThemeLight, BaseTheme } from "./styles/Theme.styles";
import { AppStyles } from "./styles/App.styles";

interface ContextT {
  changeThemeHandler: () => void;
  mode: Mode;
}

interface ProviderT {
  children: React.ReactNode;
}

export const ThemeContext = createContext<ContextT>({
  changeThemeHandler: () => {},
  mode: "light",
});

const Theme: React.FC<ProviderT> = ({ children }) => {
  const [mode, setMode] = useState<Mode>("light");
  const [isMounting, setIsMounting] = useState(true);

  function changeThemeHandler() {
    setMode((currTheme) => (currTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    const lastMode = localStorage.getItem("academind_active_mode")
      ? JSON.parse(localStorage.getItem("academind_active_mode") || "")
      : "";

    if (lastMode && lastMode !== mode) setMode(lastMode);
    else if (!lastMode)
      localStorage.setItem("academind_active_mode", JSON.stringify(mode));

    setIsMounting(false);
  }, []);

  useEffect(() => {
    if (isMounting) return;
    localStorage.setItem("academind_active_mode", JSON.stringify(mode));
  }, [mode, isMounting]);

  return (
    <ThemeContext.Provider value={{ changeThemeHandler, mode }}>
      <ThemeProvider
        theme={
          mode === "dark"
            ? ThemeDark
            : mode === "light"
            ? ThemeLight
            : BaseTheme
        }
      >
        <AppStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
