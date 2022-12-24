import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import userInfos from "../../utils/usersInfo.json";
import { UserInfoT } from "../../interface/db/db.types";

import {
  DetailedItem,
  DetailedLivingPlace,
  DetailedWorkplace,
} from "../Layouts";

interface RegistrationDetailedType {}

const RegistrationDetailed: React.FC<RegistrationDetailedType> = (props) => {
  const { requestId } = useParams();
  const [user, setUser] = useState<UserInfoT | undefined>();

  useEffect(() => {
    if (!requestId) return;
    const info = userInfos.find((info) => info._id === requestId);
    info && setUser(info);
  }, [requestId]);

  return (
    <div className="registration-detailed">
      {user && (
        <>
          <DetailedItem label="firstname" data={user.firstName} />
          <DetailedItem label="lastname" data={user.lastName} />
          <DetailedItem label="email" data={user.email} />
          <DetailedItem label="birthdate" data={user.birthDate} />
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
          <DetailedWorkplace
            company={user.workplace.company}
            position={user.workplace.position}
            workingYears={user.workplace.workingYears}
            description={user.workplace?.description}
          />
        </>
      )}
    </div>
  );
};

export default RegistrationDetailed;
