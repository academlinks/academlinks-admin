import styled from "styled-components";

export const RegistrationRequestsContainer = styled.article`
  display: flex;
  flex-direction: row;

  .requests-list {
    width: 28rem;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacers.md};
    border-right: 1px solid
      ${({ theme }) =>
        theme.mode === "dark" ? theme.colors.redShade : theme.colors.darkGray};
    padding: ${({ theme }) => theme.spacers.big};
  }

  .registration-detailed {
    flex: 3;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacers.big};

    & [data-detailed-item].last {
      border-bottom: none;
    }

    & [data-detailed-item]:first-child {
      padding-top: 0;
    }

    .btn-box {
      display: flex;
      flex-direction: row;
      gap: ${({ theme }) => theme.spacers.xl};
      justify-content: flex-end;
      margin-top: ${({ theme }) => theme.spacers.xl};
    }
  }
`;
