/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  selectUserLabels,
  selectUserLabelsState,
  selectUsersLocaleFilter,
  selectTriigererGetNewUserDetails,
} from "../../store/selectors/userSelectors";
import { useAppSelector } from "../../store/hooks";
import { UserLabelT } from "../../interface/db/users.types";

import { ListedUser, Spinner } from "../Layouts";
import FillterBox from "./FillterBox";

const UsersList: React.FC = () => {
  const navigate = useNavigate();

  const { loading, error, message } = useAppSelector(selectUserLabelsState);
  const users = useAppSelector(selectUserLabels);
  const [usersShalow, setUsersShalow] = useState(users);

  const { gender, sort } = useAppSelector(selectUsersLocaleFilter);

  const {
    getNew,
    id: scheduledUserId,
    isEmpty: isEmptySchedule,
  } = useAppSelector(selectTriigererGetNewUserDetails);

  useEffect(() => {
    if (getNew) navigate(scheduledUserId, { replace: true });
    else if (isEmptySchedule) navigate("", { replace: true });
  }, [getNew, isEmptySchedule]);

  useEffect(() => {
    if (!sort && !gender) return setUsersShalow(users);

    let filteredUsers = [...users];

    if (gender && gender !== "default")
      filteredUsers = users.filter((user) => user.gender === gender);
    if (sort && sort !== "default")
      filteredUsers = filteredUsers.sort((userA, userB) =>
        userA[sort as keyof UserLabelT] > userB[sort as keyof UserLabelT]
          ? 1
          : userA[sort as keyof UserLabelT] < userB[sort as keyof UserLabelT]
          ? -1
          : 0
      );

    setUsersShalow(filteredUsers);
  }, [sort, gender, users]);

  return (
    <aside className="users-aside">
      <FillterBox />
      {loading && <Spinner />}
      {!loading && !error && (
        <div className="users-list">
          {usersShalow.map((user, i) => (
            <ListedUser
              key={user._id}
              id={user._id}
              email={user.email}
              userName={user.userName}
              fig={user.profileImg}
            />
          ))}
        </div>
      )}
    </aside>
  );
};

export default UsersList;
