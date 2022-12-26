import React from "react";

import { useAppSelector } from "../../store/hooks";
import { formatDate } from "../../lib";

import {
  DetailedItem,
  DetailedLivingPlace,
  DetailedWorkplace,
  Button,
} from "../Layouts";

interface RegistrationDetailedType {}

const RegistrationDetailed: React.FC<RegistrationDetailedType> = () => {
  const details = useAppSelector((state) => state.registration.requestDetails);

  function calcAge(date = new Date("02-28-1996")): number {
    return Math.abs(new Date(Date.now() - date.getTime()).getFullYear() - 1970);
  }

  return (
    <div className="registration-detailed">
      {details && (
        <>
          <DetailedItem label="firstname" data={details.firstName} />
          <DetailedItem label="lastname" data={details.lastName} />
          <DetailedItem label="email" data={details.email} />

          <DetailedItem
            label="birthdate"
            data={
              formatDate(new Date(details.birthDate), "verbal")?.toString() ||
              ""
            }
          />
          <DetailedItem
            label="age"
            data={`${calcAge(new Date(details.birthDate))} years old`}
          />
          <DetailedItem label="gender" data={details.gender} />
          <DetailedLivingPlace
            label="from"
            city={details.from.city}
            country={details.from.country}
          />
          <DetailedLivingPlace
            label="lives in"
            city={details.currentLivingPlace.city}
            country={details.currentLivingPlace.country}
          />
          <DetailedWorkplace workplace={details.workplace} className="last" />
          <div className="btn-box">
            <Button label="delete" task="delete" />
            <Button label="aprove" />
          </div>
        </>
      )}
    </div>
  );
};

export default RegistrationDetailed;
