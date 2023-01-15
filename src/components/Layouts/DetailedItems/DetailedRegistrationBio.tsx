import React from "react";

import { DetailedItemContainer } from "./detailedItem.styles";

import { RegistrationBioT } from "../../../interface/db/registration.types";
interface DetailedRegistrationBioType {
  registrationBio: RegistrationBioT;
  icon?: React.ReactNode;
  className?: string;
}

const DetailedRegistrationBio: React.FC<DetailedRegistrationBioType> = ({
  registrationBio,
  icon,
  className,
}) => {
  return (
    <DetailedItemContainer
      className={`workplace-item ${icon ? "grid" : ""} ${className || ""}`}
      data-detailed-item
    >
      {icon && <span className="icon-box">{icon}</span>}
      <div className="details-wrapper">
        <span>works in</span>{" "}
        <strong className="capitalize">{registrationBio.institution}</strong>
        <span>{" "}as{" "}</span><strong>{registrationBio.position}</strong>
        <p className="description">
          <span>bio - </span> <span>{registrationBio.description}</span>
        </p>
      </div>
    </DetailedItemContainer>
  );
};

export default DetailedRegistrationBio;
