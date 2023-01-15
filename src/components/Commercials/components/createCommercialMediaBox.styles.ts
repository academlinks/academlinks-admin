import styled from "styled-components";

export const CreateCommercialMediaBoxContainer = styled.div`
  grid-column: span 2;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;

  .media-box__fig {
    width: 25rem;
    height: 25rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    position: relative;

    &.active-selected-img {
      border-radius: 0;
      width: 40rem;
      height: 40rem;
    }

    &.active-selected-img .choose-media--btn {
      right: 0;
      bottom: 0;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
      border-radius: inherit;
    }
  }

  .choose-media--btn {
    position: absolute;
    z-index: 9;
    bottom: 2rem;
    right: 3rem;
    width: 4.5rem;
    height: 4.5rem;
    border-radius: 50%;
    font-size: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.6);
    cursor: pointer;
  }

  .media-msg {
    color: ${({ theme }) => theme.colors.txt};
  }
`;
