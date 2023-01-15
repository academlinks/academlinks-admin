import styled, { keyframes, css } from "styled-components";
import { SpinnerT } from "./Spinner";

const spinn = keyframes`
  100%{
    transform: rotate(360deg);
  }
`;

export const SpinnerBox = styled.div<{ type: SpinnerT }>`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) =>
    theme.mode === "dark" ? theme.colors.redShade : theme.colors.blue};

  ${({ theme, type }) =>
    type === "block"
      ? css`
          text-align: center;
          padding: 1rem;
        `
      : css`
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          justify-content: center;
          align-items: center;
        `}

  & > span svg {
    display: inline-block;
    animation: ${spinn} 1s infinite;
  }
`;
