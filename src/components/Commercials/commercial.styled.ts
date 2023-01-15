import styled from "styled-components";
import { nestedAside, inputField, scrollBar } from "../../styles/helpers";

export const CommercialsContainer = styled.section`
  display: flex;

  .commercials-sideBar {
    ${nestedAside}
  }

  .commercials-content--wrapper {
    flex: 1;
    position: relative;
  }
`;

export const CreateCommercialForm = styled.form`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: flex-start;
  gap: 2rem;
  padding: 1rem;
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
  position: relative;

  ::-webkit-scrollbar {
    display: none;
  }

  .linkable-field {
    ${inputField};

    &__labelBox {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    &__labelBox input:checked ~ input {
      background: red;
    }
  }

  .commercial-submit__btn {
    grid-row: 0;
    grid-column: span 2;
    padding: 1rem 0;
  }
`;

export const ActiveCommercialContainer = styled.article`
  height: 100vh;
  max-height: 100vh;
  overflow: auto;
  padding: 1rem;
  ${scrollBar};
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .commercial-fig {
    width: 100%;
    aspect-ratio: 16/9;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center;
    }
  }

  .commercial-details {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 1rem 0 0 1rem;
  }

  .comemrcial-actions__btn-box {
    margin-left: auto;
    display: flex;
    align-items: center;
    gap: 2rem;
  }

  .send-email--to {
    &::first-letter {
      text-transform: capitalize;
    }
  }

  .send-email--form {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    .email-text--field {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      &__label {
        text-transform: capitalize;
        font-size: ${({ theme }) => theme.fontSizes.sm};
        font-weight: ${({ theme }) => theme.font.medium};
      }

      &__textarea {
        resize: none;
        font-style: inherit;
        outline: none;
        padding: 0.5rem;
        border-radius: 0.5rem;

        &::-webkit-scrollbar {
          display: none;
        }

        &::placeholder {
          text-transform: capitalize;
        }
      }
    }
  }

  .email-is--send__msg {
    text-align: center;
  }
`;
