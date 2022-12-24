import React from "react";

import { LivingPlaceT } from "../../../interface/db/db.types";
interface DetailedLivingPlaceType extends LivingPlaceT {
  label: string;
}

const DetailedLivingPlace: React.FC<DetailedLivingPlaceType> = ({
  label,
  country,
  city,
}) => {
  return (
    <div>
      <span>{label}</span>
      <span>
        <strong>{city}</strong>
        <strong>{country}</strong>
      </span>
    </div>
  );
};

export default DetailedLivingPlace;
