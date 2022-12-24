import { css } from "styled-components";

export const linkHover = (params: {
  class: string;
  activeClass: string;
}) => css`
  ${params.class}:not(${params.activeClass}):hover {
    background: ${({ theme }) => theme.colors.lightGray};
    color: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.bg : theme.colors.txt};
  }

  ${params.activeClass} {
    background: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.redShade : theme.colors.blue};
    color: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.txt : theme.colors.bg};
  }
`;
