import React from "react";

import { useAppSelector } from "../../store/hooks";
import { useUsersQuery } from "../../hooks";

import { selectUsersOperationLoadingState } from "../../store/selectors/userSelectors";
import { selectNotification } from "../../store/selectors/notificationSelectors";

import { UserDetailsHeader, Spinner, Error } from "../Layouts";
import { ActiveNotificationContainer } from "./notifications.styles";

const ActiveNotification: React.FC = () => {
  const { loading, error, message } = useAppSelector(
    selectUsersOperationLoadingState
  );

  const notification = useAppSelector(selectNotification);

  const { deleteUserQuery, handleResetOperationError } = useUsersQuery();

  return (
    <ActiveNotificationContainer>
      {loading && <Spinner type="stand" />}

      {error && (
        <Error
          boxType="modal"
          message={message}
          onClose={handleResetOperationError}
        />
      )}

      <UserDetailsHeader
        userDetails={{
          _id: notification?.from._id || "",
          userName: notification?.from.userName || "",
          email: notification?.from.email || "",
          profileImg: notification?.from.profileImg || "",
        }}
        deleteUserHandler={deleteUserQuery}
      />

      <div className="notification-details--box">
        <p className="notification-message">
          <strong className="userName">{notification?.from.userName}</strong>
          &nbsp;{notification?.message} from &nbsp;
          <strong>{notification?.options.oldEmail}</strong>&nbsp;to&nbsp;
          <strong>{notification?.options.newEmail}</strong>
        </p>
      </div>
    </ActiveNotificationContainer>
  );
};

export default ActiveNotification;
