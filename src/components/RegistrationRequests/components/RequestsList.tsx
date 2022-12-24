import React from "react";
import { NavLink } from "react-router-dom";
import usersList from "../../../utils/usersShort.json";

interface RequestsListType {}

const RequestsList: React.FC<RequestsListType> = (props) => {
  return (
    <div className="requests-list">
      {usersList.map((user) => (
        <NavLink
          to={user._id}
          key={user._id}
          className={({ isActive }) =>
            `${
              isActive ? "requests-list__user--active" : ""
            } requests-list__user`
          }
        >
          <figure className="requests-list__user-fig">
            <img
              src={`./assets/avatars/avatar-${
                user.gender === "male" ? "male" : "female"
              }.webp`}
              alt=""
            />
          </figure>
          <div className="requests-list__user-details">
            <span className="requests-list__user-details--userName">
              {user.userName}
            </span>
            <span className="requests-list__user-details--email">
              {user.email}
            </span>
          </div>
        </NavLink>
      ))}
    </div>
  );
};

export default RequestsList;
