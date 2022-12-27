/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { useRegistrationQuery } from "../../hooks";
import { selectRegistrationFilterKey } from "../../store/selectors/registrationSelectors";

import RegistrationRequests from "../../components/RegistrationRequests/RegistrationRequests";

const RegistrationRequestsPage: React.FC = () => {
  const filterKey = useAppSelector(selectRegistrationFilterKey);

  const { getRegistrationLabelsQuery } = useRegistrationQuery();

  useEffect(() => {
    getRegistrationLabelsQuery(filterKey);
  }, [filterKey]);

  return (
    <RegistrationRequests>
      <Outlet />
    </RegistrationRequests>
  );
};

export default RegistrationRequestsPage;
