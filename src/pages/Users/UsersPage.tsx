/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";

import { selectTriigererGetNewUserDetails } from "../../store/selectors/userSelectors";
import { useUsersQuery } from "../../hooks";
import Users from "../../components/Users/Users";

const UsersPage: React.FC = () => {
  const navigate = useNavigate();
  const { getUserLabelsQuery } = useUsersQuery();

  useEffect(() => {
    getUserLabelsQuery({});
  }, []);

  /* 
  after user will be deleted in redux state will be checked if in the list exists other user and if exists this user id will be marked as scheduled user id to navigate automaticaly to another user
  */
  const {
    getNew,
    id: scheduledUserId,
    isEmpty: isEmptySchedule,
  } = useAppSelector(selectTriigererGetNewUserDetails);

  useEffect(() => {
    if (getNew) navigate(scheduledUserId, { replace: true });
    else if (isEmptySchedule) navigate("", { replace: true });
  }, [getNew, isEmptySchedule]);

  return (
    <Users>
      <Outlet />
    </Users>
  );
};

export default UsersPage;
