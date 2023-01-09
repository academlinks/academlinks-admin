/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";

import { useCommercialQuery } from "../../hooks";
import {
  selectGetNewCommercialAlert,
  selectComercialCreationStatus,
} from "../../store/selectors/commercialSelectors";

import Commercials from "../../components/Commercials/Commercials";

const CommercialsPage: React.FC = () => {
  const { search } = useLocation();
  const navigate = useNavigate();

  const {
    getNew,
    id: scheduledCommercialId,
    isEmpty: isEmptySchedule,
  } = useAppSelector(selectGetNewCommercialAlert);

  const isSuccessfullyCreated = useAppSelector(selectComercialCreationStatus);

  const { getCommercialsQuery, handleSetCommercialSuccessfullCreation } =
    useCommercialQuery();

  /*
    we are getting different kind of commercials based on the query. here we are listening to query change
  */
  useEffect(() => {
    if (!search) return;
    getCommercialsQuery({ query: search });
  }, [search]);

  /*
  after commercial deletion in redux state we are checking if there are other commercials in the list and if is we are setting scheduled commercial id in state as an alert to redirect to the scheduled commercial. here we are getting this alert to navigate appropriate page 
  */
  useEffect(() => {
    if (getNew) navigate(scheduledCommercialId, { replace: true });
    else if (isEmptySchedule) navigate("", { replace: true });
  }, [getNew, isEmptySchedule]);

  /*
  when commercial is created in redux state operation status is served as an alert in the case to redirect on this page automaticaly. here we are nullish this alert
  */
  useEffect(() => {
    if (isSuccessfullyCreated === true)
      handleSetCommercialSuccessfullCreation(null);
  }, [isSuccessfullyCreated]);

  return (
    <Commercials>
      <Outlet />
    </Commercials>
  );
};

export default CommercialsPage;
