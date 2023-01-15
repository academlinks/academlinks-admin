import React from "react";

import { DetailedItemContainer } from "./detailedItem.styles";

import { CurrentWorkPlaceT } from "../../../interface/db/users.types";

interface DetailedCurrentWorkplaceType {
  className?: string;
  icon?: React.ReactNode;
  workplace: CurrentWorkPlaceT;
}

const DetailedCurrentWorkplace: React.FC<DetailedCurrentWorkplaceType> = ({
  className,
  icon,
  workplace,
}) => {
  return (
    <DetailedItemContainer
      className={`workplace-item ${icon ? "grid" : ""} ${className || ""}`}
      data-detailed-item
    >
      {icon && <span className="icon-box">{icon}</span>}
      <div className="details-wrapper">
        <span>currently works in</span>{" "}
        <strong className="capitalize">{workplace.institution}</strong>
        {workplace.position && (
          <>
            <span>{" "}as</span> <strong>{workplace.position}</strong>
          </>
        )}
        {workplace.description && (
          <p className="description">
            <span>description - </span>{" "}
            {workplace.description && <span>{workplace.description}</span>}
          </p>
        )}
      </div>
    </DetailedItemContainer>
  );
};

export default DetailedCurrentWorkplace;
