import styled from "styled-components";

export const UserDetailsHeaderContainer = styled.div`
  .details-header {
    height: 24rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${({ theme }) => theme.spacers.big};
    border-bottom: 1px solid
      ${({ theme }) =>
        theme.mode === "dark" ? theme.colors.redShade : theme.colors.darkGray};
    padding-bottom: ${({ theme }) => theme.spacers.xl};

    &__fig {
      width: 12rem;
      height: 12rem;
      aspect-ratio: 1/1;
      border-radius: 100%;
      overflow: hidden;
      cursor: pointer;

      img {
        width: 100%;
        height: 100%;
        object-position: center;
        object-fit: cover;
      }
    }

    &__userName {
      text-transform: capitalize;
      font-weight: ${({ theme }) => theme.font.medium};
    }

    &__email {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }
`;
