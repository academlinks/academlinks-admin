import { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    body {
      color: ${({ theme }) => theme.colors.txt};
      background: ${({ theme }) => theme.colors.bg};
      font-size: ${({ theme }) => theme.fontSizes.base};
    }
`;
