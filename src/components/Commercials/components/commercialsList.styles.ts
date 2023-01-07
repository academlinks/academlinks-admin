import styled from "styled-components";
import { linkHover } from "../../../styles/helpers";

export const CommercialsListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .commercial-item {
    border-radius: ${({ theme }) => theme.rounded.sm};
    overflow: hidden;
    display: flex;
    gap: 0.5rem;
    text-transform: capitalize;
    font-size: ${({ theme }) => theme.fontSizes.sm};

    &__fig {
      height: 100%;
      max-width: 8rem;
      aspect-ratio: 1/1;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    &__details {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      padding: 0.25rem 0;
    }
  }

  ${linkHover({ activeClass: ".active-commercial", class: ".commercial-item" })}
`;
