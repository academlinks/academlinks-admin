/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useRegistrationQueries } from "../../hooks";

import RegistrationDetailed from "../../components/RegistrationRequests/RegistrationDetailed";

const RegistrationDetailedPage: React.FC = () => {
  const { requestId } = useParams();

  const { getRegistrationRequestDetailsQuery } = useRegistrationQueries();

  useEffect(() => {
    requestId &&
      getRegistrationRequestDetailsQuery({ registrationId: requestId });
  }, []);

  return <RegistrationDetailed />;
};

export default RegistrationDetailedPage;
