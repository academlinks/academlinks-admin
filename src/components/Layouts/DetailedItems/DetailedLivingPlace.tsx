import React from "react";

import { DetailedItemContainer } from "./detailedItem.styles";

import { LivingPlaceT } from "../../../interface/db/db.types";
interface DetailedLivingPlaceType extends LivingPlaceT {
  label: string;
  icon?: React.ReactNode;
}

const DetailedLivingPlace: React.FC<DetailedLivingPlaceType> = ({
  label,
  country,
  city,
  icon,
}) => {
  return (
    <DetailedItemContainer data-detailed-item className={icon ? "grid" : ""}>
      {icon && <span className="icon-box">{icon}</span>}
      <div className="details-wrapper">
        <span>{label}</span>{" "}
        <span>
          <strong className="capitalize">{city},</strong>{" "}
          <strong className="capitalize">{country}</strong>
        </span>
      </div>
    </DetailedItemContainer>
  );
};

export default DetailedLivingPlace;
