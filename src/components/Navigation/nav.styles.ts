import styled from "styled-components";
import { linkHover } from "../../styles/helpers";

export const Nav = styled.nav`
  max-width: 30rem;
  text-transform: capitalize;
  border-right: 1px solid
    ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.redShade : theme.colors.darkGray};

  .nav-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: capitalize;

    .btn-logout {
      font-size: ${({ theme }) => theme.fontSizes.sm};
    }
  }

  .theme-btn {
    margin-left: ${({ theme }) => theme.spacers.big};
    font-size: ${({ theme }) => theme.fontSizes.big};
  }

  .nav-list {
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacers.sm};
    margin-top: ${({ theme }) => theme.spacers.lg};
  }

  .nav-link {
    padding: 1rem;
    border-radius: 0.75rem;
    transition: all 0.2s ease-in;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav-badge {
    background: ${({ theme }) =>
      theme.mode === "dark" ? theme.colors.redShade : theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSizes.xsm};
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 100%;
  }

  ${linkHover({ class: ".nav-link", activeClass: ".active-nav-link" })}
`;
