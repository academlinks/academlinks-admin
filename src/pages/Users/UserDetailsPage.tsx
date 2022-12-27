/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { selectUsersContentState } from "../../store/selectors/userSelectors";
import { useUsersQuery } from "../../hooks";

import UserDetails from "../../components/Users/UserDetails";
import { Spinner } from "../../components/Layouts";

const UserDetailsPage: React.FC = () => {
  const { userId } = useParams();

  const { loading, error, message } = useAppSelector(selectUsersContentState);

  const { getUserDetailsQuery } = useUsersQuery();

  useEffect(() => {
    userId && getUserDetailsQuery({ userId });
  }, [userId]);

  return (
    <>
      {loading && <Spinner type="stand" />}
      {!loading && !error && <UserDetails />}
    </>
  );
};

export default UserDetailsPage;
