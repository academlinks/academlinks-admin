import styled from "styled-components";
import { nestedAside } from "../../styles/helpers";

export const RegistrationRequestsContainer = styled.article`
  display: flex;
  flex-direction: row;

  .side_bar {
    ${nestedAside}
  }

  .fillter-btns--box {
    display: flex;
    justify-content: flex-start;
    gap: 2rem;
    padding: 2rem 0;
  }

  .requests-list {
    width: 28rem;
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacers.md};

    .count {
      padding: 1rem 0.5rem;
    }
  }

  .registration-detailed__wrapper {
    flex: 3;
    position: relative;
  }

  .registration-detailed {
    width: 100%;
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
