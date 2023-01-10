/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { selectStatisticLoadingState } from "../../store/selectors/statisticSelectots";

import { useStatisticQuery } from "../../hooks";

import Statistics from "../../components/Statistics/Statistics";
import { Error, Spinner } from "../../components/Layouts";

const StatisticsPage: React.FC = () => {
  const { getUsersForStatisticQuery } = useStatisticQuery();

  const { loading, error, message } = useAppSelector(
    selectStatisticLoadingState
  );

  useEffect(() => {
    getUsersForStatisticQuery();
  }, []);

  return (
    <Statistics>
      {loading && <Spinner type="stand" />}

      {error && <Error boxType="inline" message={message} />}

      {!loading && !error && <Outlet />}
    </Statistics>
  );
};

export default StatisticsPage;
