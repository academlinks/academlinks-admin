import React from "react";
import { Outlet, useParams } from "react-router-dom";

import RegistrationRequests from "../../components/RegistrationRequests/RegistrationRequests";
import RegistrationDetailed from "../../components/RegistrationRequests/RegistrationDetailed";

const RegistrationRequestsPage: React.FC = () => {
  const { requestId } = useParams();
  return (
    <RegistrationRequests>
      {requestId && <Outlet />}
      {!requestId && <RegistrationDetailed />}
    </RegistrationRequests>
  );
};

export default RegistrationRequestsPage;
