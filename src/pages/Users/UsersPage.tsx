/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useUsersQuery } from "../../hooks";
import Users from "../../components/Users/Users";

interface UsersPageType {}

const UsersPage: React.FC<UsersPageType> = (props) => {
  const { getUserLabelsQuery } = useUsersQuery();

  useEffect(() => {
    getUserLabelsQuery({});
  }, []);

  return (
    <Users>
      <Outlet />
    </Users>
  );
};

export default UsersPage;
