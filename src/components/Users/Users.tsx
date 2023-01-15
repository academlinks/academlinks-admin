import React from "react";

import { UsersContainer } from "./users.styles";
import UsersList from "./UsersList";

interface UsersType {
  children: React.ReactNode;
}

const Users: React.FC<UsersType> = ({ children }) => {
  return (
    <UsersContainer data-content-container>
      <UsersList />
      <div className="users-content--box">{children}</div>
    </UsersContainer>
  );
};

export default Users;
