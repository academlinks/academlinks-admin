import React from "react";
import { Outlet } from "react-router-dom";

import Users from "../../components/Users/Users";

interface UsersPageType {}

const UsersPage: React.FC<UsersPageType> = (props) => {
  return (
    <Users>
      <Outlet />
    </Users>
  );
};

export default UsersPage;
