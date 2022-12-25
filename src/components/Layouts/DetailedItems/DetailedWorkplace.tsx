import React from "react";

import { formatDate } from "../../../lib";

import { DetailedItemContainer } from "./detailedItem.styles";

import { WorkplaceT } from "../../../interface/db/db.types";
interface DetailedWorkplaceType {
  className?: string;
  icon?: React.ReactNode;
  workplace: WorkplaceT;
}

const DetailedWorkplace: React.FC<DetailedWorkplaceType> = ({
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
        <span>works in</span>{" "}
        <strong className="capitalize">{workplace.company}</strong>
        {workplace.position && (
          <>
            <span>as</span> <strong>{workplace.position}</strong>
          </>
        )}
        {workplace.workingYears && (
          <>
            {workplace.workingYears?.from && (
              <>
                <span>from</span>{" "}
                <strong>
                  {formatDate(
                    new Date(new Date(parseInt(workplace.workingYears.from))),
                    "verbal"
                  )}
                </strong>
              </>
            )}
            {workplace.workingYears?.to && (
              <>
                <span>to</span>{" "}
                <strong>
                  {formatDate(
                    new Date(new Date(parseInt(workplace.workingYears.to))),
                    "verbal"
                  )}
                </strong>
              </>
            )}
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

export default DetailedWorkplace;
