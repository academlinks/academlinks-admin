import React from "react";

import { useAppSelector } from "../../store/hooks";
import { useUsersQuery } from "../../hooks";
import { selectUsersOperationLoadingState } from "../../store/selectors/userSelectors";

import { UserDetailsHeader, Spinner, Error } from "../Layouts";
import { ActiveNotificationContainer } from "./notifications.styles";

const ActiveNotification: React.FC = () => {
  const { loading, error, message } = useAppSelector(
    selectUsersOperationLoadingState
  );

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
          _id: "some_id",
          userName: "user name",
          email: "useremail@io.com",
          profileImg:
            "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png",
        }}
        deleteUserHandler={deleteUserQuery}
      />

      <div className="notification-details--box">
        <p className="notification-message">
          <strong className="userName">user name</strong>&nbsp;change email from
          &nbsp;
          <strong>useremail@io.com</strong>&nbsp;to&nbsp;
          <strong>uemail@io.com</strong>
        </p>
      </div>
    </ActiveNotificationContainer>
  );
};

export default ActiveNotification;
