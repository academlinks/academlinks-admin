import styled from "styled-components";

export const ComercialSideBarNavContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, max-content);
  gap: 1rem;

  .commercials-target-btn:nth-child(3),
  .commercials-target-btn:nth-child(4) {
    grid-column: span 2;
  }
`;
