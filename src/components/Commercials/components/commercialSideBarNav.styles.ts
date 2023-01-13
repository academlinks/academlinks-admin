import styled from "styled-components";

export const ComercialSideBarNavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, max-content);
  gap: 1rem;
  height: 12.5rem;

  .commercials-target-btn:nth-child(3),
  .commercials-target-btn:nth-child(4) {
    grid-column: span 2;
  }

  .outdated-commercials--btn__box {
    position: relative;

    .commercials-target-btn {
      width: 100%;
    }

    &-badge {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      width: 2rem;
      height: 2rem;
      border-radius: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: ${({ theme }) => theme.fontSizes.xsm};
      background: ${({ theme }) => theme.colors.redShade};
    }
  }
`;
