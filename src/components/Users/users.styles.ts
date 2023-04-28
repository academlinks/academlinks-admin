import styled from "styled-components";
import { scrollBar, nestedAside } from "../../styles/helpers";

export const UsersContainer = styled.article`
  display: flex;
  flex-direction: row;

  .users-aside {
    ${nestedAside}
  }

  .users-list {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacers.big};
    padding-right: 1rem;
    max-height: calc(100vh - 20rem);
    min-height: 30rem;
    overflow: auto;
    ${scrollBar};

    .count {
      padding: 1rem 0.5rem;
    }
  }

  .users-content--box {
    position: relative;
    padding: 1rem;
    flex: 1;
  }

  .user-details--container {
    .details-info {
      min-height: 100%;
      max-height: calc(100vh - 24rem);
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
        font-weight: ${({ theme }) => theme.font.medium};
      }

      &__education,
      &__workplace:not(:last-child) {
        border: none;
      }

      &.education {
        border-bottom: ${({ theme }) => `1px solid ${theme.colors.redShade}`};
      }
    }
  }
`;
