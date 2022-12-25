import styled from "styled-components";
import { linkHover } from "../../../styles/helpers";

export const ListedUserContainer = styled.div`
  .listed-user {
    display: flex;
    flex-direction: row;
    gap: ${({ theme }) => theme.spacers.md};
    align-items: center;
    border-radius: ${({ theme }) => theme.rounded.sm};
    overflow: hidden;

    &--fig {
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

    &--details {
      display: flex;
      flex-direction: column;
      gap: ${({ theme }) => theme.spacers.sm};

      &__userName {
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.font.medium};
        text-transform: capitalize;
      }

      &__email {
        font-size: ${({ theme }) => theme.fontSizes.xsm};
      }
    }
  }

  ${linkHover({
    class: ".listed-user",
    activeClass: ".listed-user--active",
  })}
`;
