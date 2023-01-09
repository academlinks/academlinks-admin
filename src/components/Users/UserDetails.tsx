import React from "react";

import { useAppSelector } from "../../store/hooks";
import { useUsersQuery } from "../../hooks";
import { selectUserDetails } from "../../store/selectors/userSelectors";
import { formatDate } from "../../lib";

import { selectUsersOperationLoadingState } from "../../store/selectors/userSelectors";
import { Spinner, Error } from "../Layouts";

import {
  DetailedItem,
  DetailedLivingPlace,
  DetailedWorkplace,
  DetailedEducationItem,
  Button,
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

const UserDetails: React.FC = () => {
  const userDetails = useAppSelector(selectUserDetails);

  const { loading, error, message } = useAppSelector(
    selectUsersOperationLoadingState
  );

  const { deleteUserQuery, handleResetOperationError } = useUsersQuery();

  return (
    <div className="user-details--container">
      {loading && <Spinner type="stand" />}
      
      {error && (
        <Error
          boxType="modal"
          message={message}
          onClose={handleResetOperationError}
        />
      )}

      {userDetails && (
        <>
          <div className="details-header">
            <figure className="details-header__fig">
              <img src={userDetails.profileImg} alt={userDetails.userName} />
            </figure>

            <span className="details-header__userName">
              {userDetails.userName}
            </span>

            <span className="details-header__email">{userDetails.email}</span>

            <Button
              label="delete user"
              task="delete"
              onClick={() => deleteUserQuery({ userId: userDetails._id })}
            />
          </div>

          <div className="details-info">
            <DetailedItem
              label="registered at"
              data={
                userDetails.createdAt
                  ? formatDate(
                      new Date(userDetails.createdAt),
                      "verbal"
                    )?.toString()
                  : ""
              }
              icon={<FaRegRegistered />}
            />

            <DetailedItem
              label="was born"
              data={
                userDetails.birthDate
                  ? formatDate(
                      new Date(userDetails.birthDate),
                      "verbal"
                    )?.toString()
                  : ""
              }
              icon={<FaBirthdayCake />}
            />

            <DetailedLivingPlace
              label="from"
              city={userDetails.from.city}
              country={userDetails.from.country}
              icon={<MdLocationOn />}
            />

            <DetailedItem
              label="gender"
              data={userDetails.gender}
              icon={userDetails.gender === "male" ? <FaMale /> : <FaFemale />}
            />

            <DetailedLivingPlace
              label="lives in"
              city={userDetails.currentLivingPlace.city}
              country={userDetails.currentLivingPlace.country}
              icon={<MdLocationOn />}
            />

            {userDetails.workplace[0] && (
              <div className="listed-box">
                <span className="listed-box__head">workplaces</span>
                {userDetails.workplace.map((workPlace) => (
                  <DetailedWorkplace
                    key={workPlace._id}
                    workplace={workPlace}
                    icon={<BsFillBriefcaseFill />}
                    className="listed-box__workplace"
                  />
                ))}
              </div>
            )}

            {userDetails.education?.[0] && (
              <div className="listed-box">
                <span className="listed-box__head">education</span>
                {userDetails.education.map((education) => (
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
        </>
      )}
    </div>
  );
};

export default UserDetails;
