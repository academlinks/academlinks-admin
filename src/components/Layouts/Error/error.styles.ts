import styled, { css } from "styled-components";
import { ErrorBoxT } from "./Error";

export const ErrorContainer = styled.div<{ boxType: ErrorBoxT }>`
  ${({ theme, boxType }) =>
    boxType === "modal"
      ? css`
          position: absolute;
          z-index: 99;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0, 0, 0, 0.5);
        `
      : ""}

  .error-window {
    display: flex;
    text-align: center;

    ${({ theme, boxType }) =>
      boxType === "modal"
        ? css`
            padding: 2rem;
            flex-direction: column;
            gap: 2rem;
            background: ${({ theme }) => theme.colors.white};
            color: ${({ theme }) => theme.colors.darkGray};
            border-radius: ${({ theme }) => theme.rounded.md};

            .close-btn {
              margin-left: auto;
            }
          `
        : css`
            align-items: center;
            gap: 0.5rem;
            justify-content: center;
            padding: 1rem 0;
            flex-wrap: wrap;

            .close-btn {
              display: none;
            }
          `};
  }

  .icon-box {
    color: ${({ theme }) => theme.colors.redShade};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.big};
  }

  .error-msg {
    &::first-letter {
      text-transform: capitalize;
    }
  }
`;
