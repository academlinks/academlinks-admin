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

export const scrollBar = () => css`
  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: ${({ theme }) => theme.rounded.md};
    background: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.redShade : theme.colors.darkGray};
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.blueTint : theme.colors.lightGray};
    border-radius: ${({ theme }) => theme.rounded.md};
    margin-block-start: 1rem;
    margin-block-end: 1.5rem;
  }
`;
