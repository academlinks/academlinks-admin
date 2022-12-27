/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../store/hooks";

import { useRegistrationQuery } from "../../hooks";
import {
  selectRegistrationContentState,
  selectRegistrationRedirectAlert,
} from "../../store/selectors/registrationSelectors";

import RegistrationDetailed from "../../components/RegistrationRequests/RegistrationDetailed";
import { Spinner } from "../../components/Layouts";

const RegistrationDetailedPage: React.FC = () => {
  const { requestId } = useParams();
  const navigate = useNavigate();

  const { loading, error } = useAppSelector(selectRegistrationContentState);
  const { redirect, path } = useAppSelector(selectRegistrationRedirectAlert);

  const { getRegistrationRequestDetailsQuery, handleResetRedirectAlert } =
    useRegistrationQuery();

  useEffect(() => {
    requestId &&
      getRegistrationRequestDetailsQuery({ registrationId: requestId });

    if (!redirect) return;
    handleResetRedirectAlert();
    navigate(
      `/dashboard/registration-requests${path === "empty" ? "" : `/${path}`}`,
      { replace: true }
    );
  }, [requestId, redirect]);

  return (
    <>
      {loading && <Spinner type="stand" />}
      {!loading && !error && <RegistrationDetailed />}
    </>
  );
};

export default RegistrationDetailedPage;
