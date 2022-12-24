import React from "react";

import { UsersContainer } from "./users.styles";

interface UsersType {}

const Users: React.FC<UsersType> = (props) => {
  return <UsersContainer data-content-container>Users</UsersContainer>;
};

export default Users;
