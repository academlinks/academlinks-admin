/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useRegistrationQueries } from "../../hooks";

import RegistrationRequests from "../../components/RegistrationRequests/RegistrationRequests";

const RegistrationRequestsPage: React.FC = () => {
  const { getRegistrationLabelsQuery } = useRegistrationQueries();

  useEffect(() => {
    getRegistrationLabelsQuery();
  }, []);

  return (
    <RegistrationRequests>
      <Outlet />
    </RegistrationRequests>
  );
};

export default RegistrationRequestsPage;
