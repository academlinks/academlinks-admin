/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { selectUsersContentLoadingState } from "../../store/selectors/userSelectors";
import { useUsersQuery } from "../../hooks";

import UserDetails from "../../components/Users/UserDetails";
import { Spinner, Error } from "../../components/Layouts";

const UserDetailsPage: React.FC = () => {
  const { userId } = useParams();

  const { loading, error, message } = useAppSelector(
    selectUsersContentLoadingState
  );

  const { getUserDetailsQuery } = useUsersQuery();

  useEffect(() => {
    userId && getUserDetailsQuery({ userId });
  }, [userId]);

  return (
    <>
      {error && <Error boxType="inline" message={message} />}
      {loading && <Spinner type="stand" />}
      {!loading && !error && <UserDetails />}
    </>
  );
};

export default UserDetailsPage;
