/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import {
  selectUserLabels,
  selectUserLabelsState,
} from "../../store/selectors/userSelectors";
import { useAppSelector } from "../../store/hooks";

import { ListedUser, Spinner } from "../Layouts";
import FillterBox from "./FillterBox";

const UsersList: React.FC = () => {
  const users = useAppSelector(selectUserLabels);
  const { loading, error, message } = useAppSelector(selectUserLabelsState);

  return (
    <aside className="users-aside">
      {loading && <Spinner />}
      <FillterBox />
      {!loading && !error && (
        <div className="users-list">
          {users.map((user, i) => (
            <ListedUser
              key={`${user._id}--i`}
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
