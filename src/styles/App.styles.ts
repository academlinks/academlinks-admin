import { createGlobalStyle } from "styled-components";

export const AppStyles = createGlobalStyle`
    html {
      font-size: 62.5%;
      scroll-behavior: smooth;
    }

    *,
    *::after,
    *::before{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }

    body {
      color: ${({ theme }) => theme.colors.txt};
      background: ${({ theme }) => theme.colors.bg};
      font-size: ${({ theme }) => theme.fontSizes.base};
      font-family: 'Roboto', sans-serif;
    }

    a {
      text-decoration: none;
      color:inherit;
    }

    button{
      background: none;
      color:inherit;
      font-size: inherit;
      border: none;
      outline: none;
      cursor: pointer;
    }
`;
