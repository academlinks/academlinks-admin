import React from "react";

import users from "../../utils/users.json";
import { ListedUser } from "../Layouts";

interface UsersListType {}

const UsersList: React.FC<UsersListType> = (props) => {
  return (
    <div className="users-list">
      {users.map((user) => (
        <ListedUser
          key={user._id}
          id={user._id}
          email={user.email}
          userName={user.userName}
          fig={user.profileImg}
        />
      ))}
    </div>
  );
};

export default UsersList;
