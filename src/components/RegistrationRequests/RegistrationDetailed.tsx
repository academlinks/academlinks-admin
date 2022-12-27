import React from "react";

import { useAppSelector } from "../../store/hooks";
import { useRegistrationQuery } from "../../hooks";
import { selectRegistrationRequestDetails } from "../../store/selectors/registrationSelectors";
import { formatDate } from "../../lib";

import {
  DetailedItem,
  DetailedLivingPlace,
  DetailedWorkplace,
  Button,
} from "../Layouts";

const RegistrationDetailed: React.FC = () => {
  const details = useAppSelector(selectRegistrationRequestDetails);

  const { aproveRequestQuery, deleteRequestQuery } = useRegistrationQuery();

  function calcAge(date = new Date("02-28-1996")): number {
    return Math.abs(new Date(Date.now() - date.getTime()).getFullYear() - 1970);
  }

  return (
    <div className="registration-detailed">
      <DetailedItem label="firstname" data={details?.firstName!} />
      <DetailedItem label="lastname" data={details?.lastName!} />
      <DetailedItem label="email" data={details?.email!} />
      <DetailedItem
        label="birthdate"
        data={
          details?.birthDate
            ? formatDate(new Date(details?.birthDate), "verbal")?.toString()
            : ""
        }
      />
      <DetailedItem
        label="age"
        data={`${calcAge(new Date(details?.birthDate!))} years old`}
      />
      <DetailedItem label="gender" data={details?.gender!} />
      <DetailedLivingPlace
        label="from"
        city={details?.from.city!}
        country={details?.from.country!}
      />
      <DetailedLivingPlace
        label="lives in"
        city={details?.currentLivingPlace.city!}
        country={details?.currentLivingPlace.country!}
      />
      <DetailedWorkplace workplace={details?.workplace!} className="last" />
      {!details?.aproved && (
        <div className="btn-box">
          <Button
            label="delete"
            task="delete"
            onClick={() =>
              deleteRequestQuery({ registrationId: details?._id! })
            }
          />
          <Button
            label="aprove"
            onClick={() =>
              aproveRequestQuery({ registrationId: details?._id! })
            }
          />
        </div>
      )}
    </div>
  );
};

export default RegistrationDetailed;
