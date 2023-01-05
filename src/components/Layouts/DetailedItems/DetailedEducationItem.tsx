import React from "react";

import { DetailedItemContainer } from "./detailedItem.styles";

import { formatDate } from "../../../lib";
import { EducationT } from "../../../interface/db/crossOver.types";
interface DetailedEducationType {
  className?: string;
  icon?: React.ReactNode;
  education: EducationT;
}

const DetailedEducationItem: React.FC<DetailedEducationType> = ({
  education,
  icon,
  className,
}) => {
  return (
    <DetailedItemContainer
      className={`education-item ${icon ? "grid" : ""} ${className || ""}`}
      data-detailed-item
    >
      {icon && <span className="icon-box">{icon}</span>}
      <div className="details-wrapper">
        <span>studied in</span> <strong>{education?.collage}</strong>{" "}
        {education?.faculty && (
          <>
            <span>at </span>
            <strong>{education.faculty}</strong> <span>faculty</span>{" "}
          </>
        )}
        {education?.degree && (
          <>
            <span>as</span> <strong>{education.degree}</strong>
          </>
        )}
        {education?.years && (
          <>
            {education.years.from && (
              <>
                <span> from</span>{" "}
                <strong>
                  {formatDate(
                    new Date(parseInt(education.years.from || "")),
                    "verbal"
                  )}
                </strong>
              </>
            )}{" "}
            {education.years.to && (
              <>
                <span>to</span>{" "}
                <strong>
                  {formatDate(
                    new Date(parseInt(education.years.to || "")),
                    "verbal"
                  )}
                </strong>
              </>
            )}
          </>
        )}
        {education?.description && (
          <p className="description">
            <span>description - </span>
            <span>{education.description}</span>
          </p>
        )}
      </div>
    </DetailedItemContainer>
  );
};

export default DetailedEducationItem;
