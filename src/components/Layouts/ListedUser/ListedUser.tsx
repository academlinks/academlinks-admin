import React from "react";
import { NavLink } from "react-router-dom";

import { extractRootEndPointFromImg } from "../../../lib";

import { ListedUserContainer } from "./listedUser.styles";

interface ListedUserType {
  id: string;
  gender?: string;
  userName: string;
  email: string;
  fig: "default" | string;
}

const ListedUser: React.FC<ListedUserType> = ({
  id,
  userName,
  email,
  fig,
  gender,
}) => {
  return (
    <ListedUserContainer>
      <NavLink
        to={id}
        className={({ isActive }) =>
          `${isActive ? "listed-user--active" : ""} listed-user`
        }
      >
        <figure className="listed-user--fig">
          <img
            src={
              fig === "default"
                ? `/assets/avatars/avatar-${
                    gender === "male" ? "male" : "female"
                  }.webp`
                : extractRootEndPointFromImg(fig)
            }
            alt={`avatar ${fig === "default" ? gender : userName}`}
          />
        </figure>
        <div className="listed-user--details">
          <span className="listed-user--details__userName">{userName}</span>
          <span className="listed-user--details__email">{email}</span>
        </div>
      </NavLink>
    </ListedUserContainer>
  );
};

export default ListedUser;
