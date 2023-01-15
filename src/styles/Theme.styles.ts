import { DefaultTheme } from "styled-components";

export const BaseTheme: DefaultTheme = {
  mode: "light",

  colors: {
    bg: "#F2F2F2",
    txt: "#0D0D0D",

    black: "#0D0D0D",
    darkGray: "#262626",
    gray: "#404040",
    darkLightGray: "#595959",
    lightGray: "#D9D9D9",

    white: "#F2F2F2",
    whiteShade: "#FAFAE4",

    blue: "#0455BF",
    blueTint: "rgba(80,150,242,0.5)",
    lightBlue: "#3084F2",

    red: "#F20519",
    redShade: "#BF0404",
  },

  fontSizes: {
    lg: "2.6rem",
    big: "2rem",
    base: "1.6rem",
    sm: "1.4rem",
    xsm: "1.2rem",
  },

  font: {
    tiny: 100,
    thin: 300,
    regullar: 400,
    medium: 500,
    bold: 700,
  },

  spacers: {
    xl: "2rem",
    lg: "1.5rem",
    big: "1rem",
    md: "0.5rem",
    sm: "0.25rem",
  },

  rounded: {
    xl: "3rem",
    lg: "2rem",
    big: "1.5rem",
    md: "1rem",
    sm: "0.5rem",
    xsm: "0.25rem",
  },
};

export const ThemeLight: DefaultTheme = {
  ...BaseTheme,

  mode: "light",

  colors: {
    ...BaseTheme.colors,
    bg: "#F2F2F2",
    txt: "#0D0D0D",
  },
};

export const ThemeDark: DefaultTheme = {
  ...BaseTheme,

  mode: "dark",

  colors: {
    ...BaseTheme.colors,
    bg: "#0D0D0D",
    txt: "#F2F2F2",
  },
};
