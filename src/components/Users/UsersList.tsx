/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import {
  selectUserLabels,
  selectUsersSideBarLoadingState,
  selectUsersLocaleFilter,
} from "../../store/selectors/userSelectors";
import { useAppSelector } from "../../store/hooks";
import { UserLabelT } from "../../interface/db/users.types";

import { ListedUser, Spinner, Error } from "../Layouts";
import FillterBox from "./FillterBox";

const UsersList: React.FC = () => {
  const { loading, error, message } = useAppSelector(
    selectUsersSideBarLoadingState
  );
  const users = useAppSelector(selectUserLabels);
  const [usersShalow, setUsersShalow] = useState(users);

  const { gender, sort } = useAppSelector(selectUsersLocaleFilter);

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

      {error && <Error boxType="inline" message={message} />}

      {!loading && !error && (
        <div className="users-list">
          <span className="count">Fixating {users.length} Users</span>
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
