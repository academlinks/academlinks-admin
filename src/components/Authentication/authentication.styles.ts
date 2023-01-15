import styled from "styled-components";

export const AuthenticationContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .authentication-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
  }

  .inp-field {
    height: 3.5rem;
    padding: 0 0.5rem;
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.colors.darkGray};

    &::placeholder {
      font-size: ${({ theme }) => theme.fontSizes.xsm};
    }
  }

  .error-msg {
    color: ${({ theme }) => theme.colors.redShade};
    text-align: center;
    font-weight: ${({ theme }) => theme.font.thin};
    font-size: ${({ theme }) => theme.fontSizes.sm};
    margin-top: 0.5rem;

    &::first-letter {
      text-transform: capitalize;
    }
  }

  .submit-btn,
  .inp-field {
    width: 30rem;
  }
`;

export const Input = styled.input<{ error: boolean }>`
  ${({ theme, error }) =>
    error ? `border:2px solid ${theme.colors.redShade}` : ""};
`;
