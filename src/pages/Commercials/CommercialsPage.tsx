/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { useCommercialQuery } from "../../hooks";

import Commercials from "../../components/Commercials/Commercials";

const CommercialsPage: React.FC = () => {
  const { search } = useLocation();

  const { getConersationsQuery } = useCommercialQuery();

  useEffect(() => {
    if (!search) return;
    getConersationsQuery({ query: search });
  }, [search]);

  return (
    <Commercials>
      <Outlet />
    </Commercials>
  );
};

export default CommercialsPage;
