import styled from "styled-components";

import { linkHover } from "../../styles/helpers";

export const RegistrationRequestsContainer = styled.article`
  display: flex;
  flex-direction: row;

  .requests-list {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-right: 1px solid
      ${({ theme }) =>
        theme.mode === "dark" ? theme.colors.redShade : theme.colors.darkGray};
    padding: 1rem;

    &__user {
      display: flex;
      flex-direction: row;
      gap: 0.5rem;
      align-items: center;
      border-radius: ${({ theme }) => theme.rounded.sm};
      overflow: hidden;

      &-fig {
        width: 4rem;
        height: 4rem;
        aspect-ratio: 1/1;
        border-radius: inherit;
        overflow: inherit;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }

      &-details {
        display: flex;
        flex-direction: column;
        gap: 0.25rem;

        &--userName {
          font-size: ${({ theme }) => theme.fontSizes.sm};
          font-weight: ${({ theme }) => theme.font.medium};
          text-transform: capitalize;
        }

        &--email {
          font-size: ${({ theme }) => theme.fontSizes.xsm};
        }
      }
    }

    ${linkHover({
      class: ".requests-list__user",
      activeClass: ".requests-list__user--active",
    })}
  }

  .registration-detailed {
    flex: 3;
  }
`;
