import React from "react";

import { CommercialsContainer } from "./commercial.styled";
import CommercialSideBarNav from "./components/CommercialSideBarNav";
import CommercialsList from "./components/CommercialsList";

interface CommercialsType {
  children: React.ReactNode;
}

const Commercials: React.FC<CommercialsType> = ({ children }) => {
  return (
    <CommercialsContainer data-content-container>
      <div className="commercials-sideBar">
        <CommercialSideBarNav />
        <CommercialsList />
      </div>
      <div className="commercials-content--wrapper">{children}</div>
    </CommercialsContainer>
  );
};

export default Commercials;
