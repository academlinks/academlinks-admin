import styled from "styled-components";
import { TaskT } from "./BTN";

export const Button = styled.button<{ task: TaskT }>`
  background: ${({ theme, task }) =>
    theme.mode === "dark"
      ? `${
          task === "aprove"
            ? theme.colors.blue
            : task === "delete"
            ? theme.colors.redShade
            : theme.colors.lightGray
        }`
      : `${
          task === "aprove"
            ? theme.colors.blue
            : task === "delete"
            ? theme.colors.redShade
            : theme.colors.lightGray
        }`};

  color: ${({ theme }) => theme.colors.white};

  padding: 0.75rem 1.5rem;
  text-transform: capitalize;
  border-radius: ${({ theme }) => theme.rounded.sm};
  transition: all 0.2s ease;

  :hover {
    filter: brightness(120%);
  }
`;
