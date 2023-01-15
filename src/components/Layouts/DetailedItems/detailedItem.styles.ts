import styled from "styled-components";

export const DetailedItemContainer = styled.div`
  border-bottom: 1px solid
    ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.redShade : theme.colors.darkGray};
  padding: ${({ theme }) => `${theme.spacers.big} 0`};

  &.grid {
    display: grid;
    grid-template-columns: 2rem 1fr;
    grid-auto-rows: auto;
    align-items: flex-start;
    column-gap: 0.5rem;
  }

  .icon-box {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .details-wrapper {
    max-width: 100%;
  }

  &:first-child::first-letter,
  & > *:first-letter,
  & ~ *::first-letter {
    text-transform: capitalize;
  }

  &.education-item .description,
  &.workplace-item .description {
    margin-top: ${({ theme }) => theme.spacers.md};
    font-style: italic;
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }

  .capitalize {
    display: inline-block;
    text-transform: capitalize;
  }
`;
