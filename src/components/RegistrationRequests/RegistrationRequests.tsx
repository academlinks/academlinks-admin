import React from "react";

import { RegistrationRequestsContainer } from "./registrationRequests.styles";
import RequestsList from "./components/RequestsList";

interface RegistartionType {
  children: React.ReactNode;
}

const Registartion: React.FC<RegistartionType> = ({ children }) => {
  return (
    <RegistrationRequestsContainer data-content-container>
      <RequestsList />
      {children}
    </RegistrationRequestsContainer>
  );
};

export default Registartion;
