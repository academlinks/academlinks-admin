import { DefaultTheme } from "styled-components";

export const BaseTheme: DefaultTheme = {
  mode: "light",
  
  colors: {
    bg: "#fff",
    txt: "#111",
    black: "#111",
    white: "#fff",
    red: "#fafa",
  },

  fontSizes: {
    base: "1.6rem",
  },
};

export const ThemeLight: DefaultTheme = {
  ...BaseTheme,

  mode: "light",
  
  colors: {
    ...BaseTheme.colors,
    bg: "#fff",
    txt: "#111",
  },
};

export const ThemeDark: DefaultTheme = {
  ...BaseTheme,
  
  mode: "dark",
  
  colors: {
    ...BaseTheme.colors,
    bg: "#111",
    txt: "#fff",
  },
};
