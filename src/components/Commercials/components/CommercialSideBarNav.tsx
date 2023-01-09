/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useAppSelector } from "../../../store/hooks";

import { selectCommercialTarget } from "../../../store/selectors/commercialSelectors";
import { useCommercials } from "../../../hooks";

import { Button } from "../../Layouts";
import { ComercialSideBarNavContainer } from "./commercialSideBarNav.styles";
import { CommercialTargetT } from "../../../interface/reducers/commercialReducer.types";

const CommercialSideBarNav: React.FC = () => {
  const navigate = useNavigate();

  const { search, pathname } = useLocation();
  const avalableTargets: CommercialTargetT[] = [
    "all",
    "outdated",
    "active",
    "create",
  ];
  const target = avalableTargets.find(
    (aim) => aim === search.split("=")[0].replace("?", "") && aim !== "create"
  );

  const targetKey = useAppSelector(selectCommercialTarget);
  const { handleCommercialTarget } = useCommercials();

  useEffect(() => {
    if (target && targetKey !== target) handleCommercialTarget(target);
    else if (!target && pathname.endsWith("create"))
      handleCommercialTarget("create");

    return () => handleCommercialTarget("active");
  }, []);

  const { handleResetCommercial, handleResetCommercials } = useCommercials();

  useEffect(() => {
    if (pathname.endsWith("create")) {
      handleResetCommercial();
      handleResetCommercials();
    }
  }, [pathname]);

  return (
    <ComercialSideBarNavContainer>
      <Button
        className="commercials-target-btn"
        label="active"
        task={targetKey === "active" ? "aprove" : "cancel"}
        onClick={() => {
          handleCommercialTarget("active");
          navigate("/dashboard/commercials?active=true");
        }}
      />
      <Button
        className="commercials-target-btn"
        label="outdated"
        task={targetKey === "outdated" ? "aprove" : "cancel"}
        onClick={() => {
          handleCommercialTarget("outdated");
          navigate("/dashboard/commercials?outdated=true");
        }}
      />
      <Button
        className="commercials-target-btn"
        label="all"
        task={targetKey === "all" ? "aprove" : "cancel"}
        onClick={() => {
          handleCommercialTarget("all");
          navigate("/dashboard/commercials?all=true");
        }}
      />
      <Button
        className="commercials-target-btn"
        label="create commercial"
        task={targetKey === "create" ? "aprove" : "cancel"}
        onClick={() => {
          handleCommercialTarget("create");
          navigate("create");
        }}
      />
    </ComercialSideBarNavContainer>
  );
};

export default CommercialSideBarNav;
