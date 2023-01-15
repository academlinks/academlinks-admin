/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { useCommercialQuery } from "../../hooks";

import { selectCommercialContentLoadingState } from "../../store/selectors/commercialSelectors";

import ActiveCommercial from "../../components/Commercials/ActiveCommercial";
import { Spinner, Error } from "../../components/Layouts";

const ActiveCommercialPage: React.FC = () => {
  const { commercialId } = useParams();

  const { loading, error, message } = useAppSelector(
    selectCommercialContentLoadingState
  );

  const { getCommercialQuery } = useCommercialQuery();

  useEffect(() => {
    commercialId && getCommercialQuery({ commercialId });
  }, [commercialId]);

  return (
    <>
      {error && <Error boxType="inline" message={message} />}
      {loading && <Spinner />}
      {!loading && !error && <ActiveCommercial />}
    </>
  );
};

export default ActiveCommercialPage;
