/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../../store/hooks";

import { selectCommercialTarget } from "../../../store/selectors/commercialSelectors";
import { useCommercials } from "../../../hooks";

import { Button } from "../../Layouts";
import { ComercialSideBarNavContainer } from "./commercialSideBarNav.styles";

const CommercialSideBarNav: React.FC = () => {
  const targetKey = useAppSelector(selectCommercialTarget);
  const { handleCommercialTarget } = useCommercials();

  const navigate = useNavigate();

  useEffect(() => {
    return () => handleCommercialTarget("all");
  }, []);

  return (
    <ComercialSideBarNavContainer>
      <Button
        className="commercials-target-btn"
        label="active"
        task={targetKey === "active" ? "aprove" : "cancel"}
        onClick={() => {
          handleCommercialTarget("active");
          navigate("/dashboard/commercials?active");
        }}
      />
      <Button
        className="commercials-target-btn"
        label="outdated"
        task={targetKey === "outdated" ? "aprove" : "cancel"}
        onClick={() => {
          handleCommercialTarget("outdated");
          navigate("/dashboard/commercials?outdated");
        }}
      />
      <Button
        className="commercials-target-btn"
        label="all"
        task={targetKey === "all" ? "aprove" : "cancel"}
        onClick={() => {
          handleCommercialTarget("all");
          navigate("/dashboard/commercials?all");
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
