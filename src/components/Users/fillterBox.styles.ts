import styled, { keyframes } from "styled-components";

const MAIN_TAB_BTN_RADIUS = "1rem";

const SLIDE_DOWN = keyframes`
  0%{
    transform: translateY(-2rem);
    opacity: 0;
    z-index: -1;
  }
  99%{
    z-index: -1;
  }
  100%{
    transform: translateY(0);
    opacity: 1;
    z-index: auto;
  }
`;

export const FilterBoxContainer = styled.div`
  [data-tab]:first-child .tab-btn {
    border-top-left-radius: ${MAIN_TAB_BTN_RADIUS};
    border-top-right-radius: ${MAIN_TAB_BTN_RADIUS};
  }
  [data-tab]:last-child .tab-btn {
    border-bottom-left-radius: ${MAIN_TAB_BTN_RADIUS};
    border-bottom-right-radius: ${MAIN_TAB_BTN_RADIUS};
  }

  [data-tab].active:last-child .tab-btn {
    border-radius: 0rem;
  }
`;

export const TabContainer = styled.div`
  .tab-btn {
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
    padding: 1rem 0;
    width: 100%;
    text-transform: capitalize;

    &:not(:last-child) {
      border-bottom: 1px solid ${({ theme }) => theme.colors.darkLightGray};
    }
  }

  .tab-content {
    position: relative;
    width: 100%;
    padding: 2rem 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    background: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.white : theme.colors.lightGray};
    animation: ${SLIDE_DOWN} 0.15s ease-out;

    &.last {
      border-bottom-left-radius: ${MAIN_TAB_BTN_RADIUS};
      border-bottom-right-radius: ${MAIN_TAB_BTN_RADIUS};
    }

    .gender-btn,
    .sort-btn {
      padding: 0.75rem 0;
      color: ${({ theme }) => theme.colors.darkLightGray};
      text-transform: capitalize;
      border-radius: ${({ theme }) => theme.rounded.sm};
      transition: all 0.2s;

      :hover {
        background: ${({ theme }) => theme.colors.blueTint};
      }
    }
  }

  .inp-field {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    &__label {
      color: ${({ theme }) => theme.colors.darkGray};
      text-transform: capitalize;
      font-size: ${({ theme }) => theme.fontSizes.sm};
      padding: 0 0.5rem;
    }

    &__input {
      border: 1px solid ${({ theme }) => theme.colors.darkLightGray};
      height: 3rem;
      border-radius: ${({ theme }) => theme.rounded.sm};
      padding: 0 0.5rem;
      color: ${({ theme }) => theme.colors.darkGray};

      ::placeholder {
        font-size: ${({ theme }) => theme.fontSizes.xsm};
      }
    }
  }
`;
