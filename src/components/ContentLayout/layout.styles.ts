import styled from "styled-components";

export const LayoutContainer = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: row;

  [data-page-navigation] {
    flex: 1;
    min-width: 30rem;
  }

  [data-content-container] {
    flex: 5;
  }

  [data-page-navigation],
  [data-content-container] {
    padding: 1rem;
  }
`;
