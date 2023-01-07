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

export const nestedAside = () => css`
  width: 30rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: 1px solid
    ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.redShade : theme.colors.darkGray};
  padding: ${({ theme }) => theme.spacers.big};
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const inputField = () => css`
  & {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  [data-input-field-label] {
    text-transform: capitalize;
    font-weight: ${({ theme }) => theme.font.medium};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    cursor: pointer;
  }

  [data-input-field] {
    height: 3rem;
    padding: 0 0.3rem;
    border-radius: ${({ theme }) => theme.rounded.sm};
    color: ${({ theme }) => theme.colors.darkGray};

    &::placeholder {
      text-transform: capitalize;
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }

  [data-innput-field-error] {
    font-weight: ${({ theme }) => theme.font.thin};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    color: ${({ theme }) => theme.colors.redShade};

    &::first-letter {
      text-transform: capitalize;
    }
  }
`;
