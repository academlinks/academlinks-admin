import React from "react";

import { RegistrationRequestsContainer } from "./registrationRequests.styles";
import RequestsList from "./components/RequestsList";
import FillterButtons from "./components/FillterButtons";

interface RegistartionType {
  children: React.ReactNode;
}

const Registartion: React.FC<RegistartionType> = ({ children }) => {
  return (
    <RegistrationRequestsContainer data-content-container>
      <div className="side_bar">
        <FillterButtons />
        <RequestsList />
      </div>
      <div className="registration-detailed__wrapper">{children}</div>
    </RegistrationRequestsContainer>
  );
};

export default Registartion;
