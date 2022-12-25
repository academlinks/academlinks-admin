import styled from "styled-components";
import { scrollBar } from "../../styles/helpers";

export const UsersContainer = styled.article`
  display: flex;
  flex-direction: row;

  .users-list {
    width: 28rem;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacers.md};
    border-right: 1px solid
      ${({ theme }) =>
        theme.mode === "dark" ? theme.colors.redShade : theme.colors.darkGray};
    padding: ${({ theme }) => theme.spacers.big};
  }

  .users-content--box {
    padding: 1rem;
    flex: 1;
  }

  .user-details--container {
    .details-header {
      height: 20rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: ${({ theme }) => theme.spacers.big};
      border-bottom: 1px solid
        ${({ theme }) =>
          theme.mode === "dark"
            ? theme.colors.redShade
            : theme.colors.darkGray};
      padding-bottom: ${({ theme }) => theme.spacers.xl};

      &__fig {
        width: 12rem;
        height: 12rem;
        aspect-ratio: 1/1;
        border-radius: 100%;
        overflow: hidden;

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

    .details-info {
      min-height: 100%;
      max-height: calc(100vh - 20rem);
      overflow: auto;
      padding: 1rem 1rem 2rem 1rem;

      ${scrollBar}
    }

    .listed-box {
      padding: 1rem 0;

      &__head {
        display: inline-block;
        margin-bottom: 1rem;
        text-transform: capitalize;
      }

      &__education,
      &__workplace:not(:last-child) {
        border: none;
      }
    }
  }
`;
