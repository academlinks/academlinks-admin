import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { formatDate } from "../../lib";

import {
  DetailedItem,
  DetailedLivingPlace,
  DetailedWorkplace,
  DetailedEducationItem,
} from "../Layouts";

import {
  FaRegRegistered,
  FaBirthdayCake,
  FaMale,
  FaFemale,
  FaGraduationCap,
} from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";

import users from "../../utils/users.json";
import { UserBaseT } from "../../interface/db/db.types";
interface UserDetailsType {}

const UserDetails: React.FC<UserDetailsType> = (props) => {
  const { userId } = useParams();
  const [user, setUser] = useState<UserBaseT>();

  useEffect(() => {
    if (!userId) return;
    const currUser = users.find((user) => user._id === userId);
    if (currUser) setUser(currUser);
  }, [userId]);

  return user ? (
    <div className="user-details--container">
      <div className="details-header">
        <figure className="details-header__fig">
          <img src={user.profileImg} alt={user.userName} />
        </figure>
        <span className="details-header__userName">{user.userName}</span>
        <span className="details-header__email">{user.email}</span>
      </div>
      <div className="details-info">
        <DetailedItem
          label="registered at"
          data={formatDate(new Date(parseInt(user.createdAt)), "verbal") || ""}
          icon={<FaRegRegistered />}
        />
        <DetailedItem
          label="was born"
          data={formatDate(new Date(parseInt(user.birthDate)), "verbal") || ""}
          icon={<FaBirthdayCake />}
        />
        <DetailedLivingPlace
          label="from"
          city={user.from.city}
          country={user.from.country}
          icon={<MdLocationOn />}
        />
        <DetailedItem
          label="gender"
          data={user.gender}
          icon={user.gender === "male" ? <FaMale /> : <FaFemale />}
        />
        <DetailedLivingPlace
          label="lives in"
          city={user.currentLivingPlace.city}
          country={user.currentLivingPlace.country}
          icon={<MdLocationOn />}
        />
        {user.workplace[0] && (
          <div className="listed-box">
            <span className="listed-box__head">workplaces</span>
            {user.workplace.map((workPlace) => (
              <DetailedWorkplace
                key={workPlace._id}
                workplace={workPlace}
                icon={<BsFillBriefcaseFill />}
                className="listed-box__workplace"
              />
            ))}
          </div>
        )}
        {user.education?.[0] && (
          <div className="listed-box">
            <span className="listed-box__head">educations</span>
            {user.education.map((education) => (
              <DetailedEducationItem
                key={education._id}
                education={education}
                icon={<FaGraduationCap />}
                className="listed-box__education"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default UserDetails;
