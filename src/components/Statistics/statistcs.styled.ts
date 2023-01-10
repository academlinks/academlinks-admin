import styled from "styled-components";
import { nestedAside, linkHover } from "../../styles/helpers";

export const StatContainer = styled.div`
  width: 100%;
  display: flex;

  .statistics-aside {
    ${nestedAside}

    .stat-route {
      padding: 0.5rem;
      border-radius: ${({ theme }) => theme.rounded.sm};
      text-transform: capitalize;
    }

    ${linkHover({
      class: ".stat-route",
      activeClass: ".stat-route--active",
    })}
  }

  .statistics-content--box {
    position: relative;
    padding: 1rem;
    flex: 1;
  }

  .statistic__wrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    align-items: center;
    justify-content: center;
    height: 100%;

    .statistic__container {
      width: 75%;
      height: max-content;

      &.radial {
        width: 55%;
      }

      .chart {
        max-width: 100%;
      }
    }
  }

  .stat-header {
    display: flex;
    gap: 2rem;
    text-transform: capitalize;
  }

  .reg-date--range__select-field {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;
