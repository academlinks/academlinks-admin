import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { formatDate } from "../../lib";

import userInfos from "../../utils/usersInfo.json";
import { UserInfoT } from "../../interface/db/db.types";

import {
  DetailedItem,
  DetailedLivingPlace,
  DetailedWorkplace,
  Button,
} from "../Layouts";

interface RegistrationDetailedType {}

const RegistrationDetailed: React.FC<RegistrationDetailedType> = () => {
  const { requestId } = useParams();
  const [user, setUser] = useState<UserInfoT | undefined>();

  useEffect(() => {
    if (!requestId) return;
    const info = userInfos.find((info) => info._id === requestId);
    info && setUser(info);
  }, [requestId]);

  function calcAge(date = new Date("02-28-1996")): number {
    return Math.abs(new Date(Date.now() - date.getTime()).getFullYear() - 1970);
  }

  return (
    <div className="registration-detailed">
      {user && (
        <>
          <DetailedItem label="firstname" data={user.firstName} />
          <DetailedItem label="lastname" data={user.lastName} />
          <DetailedItem label="email" data={user.email} />

          <DetailedItem
            label="birthdate"
            data={
              formatDate(
                new Date(parseInt(user.birthDate)),
                "verbal"
              )?.toString() || ""
            }
          />
          <DetailedItem
            label="age"
            data={`${calcAge(new Date(parseInt(user.birthDate)))} years old`}
          />
          <DetailedItem label="gender" data={user.gender} />
          <DetailedLivingPlace
            label="from"
            city={user.from.city}
            country={user.from.country}
          />
          <DetailedLivingPlace
            label="lives in"
            city={user.currentLivingPlace.city}
            country={user.currentLivingPlace.country}
          />
          <DetailedWorkplace workplace={user.workplace} className="last" />
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
