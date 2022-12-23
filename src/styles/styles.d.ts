import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    mode: Mode;
    colors: Color;
    fontSizes: FontSize;
  }

  type Mode = "dark" | "light";

  interface Color {
    bg: "#111" | "#fff";
    txt: "#111" | "#fff";
    black: "#111";
    white: "#fff";
    red: "#fafa";
  }

  interface FontSize {
    base: "1.6rem";
  }
}
