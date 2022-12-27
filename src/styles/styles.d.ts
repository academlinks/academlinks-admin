import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: Mode;
    colors: Color;
    fontSizes: FontSize;
    font: Font;
    spacers: Spacers;
    rounded: Round;
  }

  type Mode = "dark" | "light";

  interface Color {
    bg: "#0D0D0D" | "#F2F2F2";
    txt: "#0D0D0D" | "#F2F2F2";

    black: "#0D0D0D";
    darkGray: "#262626";
    gray: "#404040";
    darkLightGray: "#595959";
    lightGray: "#D9D9D9";

    white: "#F2F2F2";
    whiteShade: "#FAFAE4";

    blue: "#0455BF";
    lightBlue: "#3084F2";
    blueTint: "rgba(80,150,242,0.5)";

    red: "#F20519";
    redShade: "#BF0404";
  }

  interface FontSize {
    lg: "2.6rem";
    big: "2rem";
    base: "1.6rem";
    sm: "1.4rem";
    xsm: "1.2rem";
  }

  interface Font {
    tiny: 100;
    thin: 300;
    regullar: 400;
    medium: 500;
    bold: 700;
  }

  interface Spacers {
    xl: "2rem";
    lg: "1.5rem";
    big: "1rem";
    md: "0.5rem";
    sm: "0.25rem";
  }

  interface Round {
    xl: "3rem";
    lg: "2rem";
    big: "1.5rem";
    md: "1rem";
    sm: "0.5rem";
    xsm: "0.25rem";
  }
}
