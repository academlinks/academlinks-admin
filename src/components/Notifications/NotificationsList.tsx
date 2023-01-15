import React from "react";

import {
  selectNotificationSideBarLoadingState,
  selectNotificationOperationLoadingState,
  selectNotifications,
} from "../../store/selectors/notificationSelectors";
import { useAppSelector } from "../../store/hooks";
import { useNotificationQuery } from "../../hooks";

import NotifyItem from "./NotifyItem";
import { Spinner, Error } from "../Layouts";

const NotificationsList: React.FC = () => {
  const { loading, error, message } = useAppSelector(
    selectNotificationSideBarLoadingState
  );

  const {
    loading: operationLoading,
    error: operationError,
    message: operationMessage,
  } = useAppSelector(selectNotificationOperationLoadingState);

  const notifications = useAppSelector(selectNotifications);

  const {
    deleteAllNotificationsQuery,
    deleteNotificationQuery,
    resetNotificationOperationErrorHandler,
  } = useNotificationQuery();

  return (
    <aside className="notifications-aside">
      <div className="delete-all--box">
        <button onClick={deleteAllNotificationsQuery}>
          delete all notifications
        </button>
      </div>

      {loading && <Spinner />}

      {error && <Error boxType="inline" message={message} />}

      {!loading && !error && (
        <div className="notifications-list">
          {notifications.map((notify) => (
            <NotifyItem
              key={notify._id}
              notify={notify}
              deleteNotifyHandler={deleteNotificationQuery}
            />
          ))}
        </div>
      )}

      {operationLoading && <Spinner type="stand" />}

      {operationError && (
        <Error
          boxType="modal"
          message={operationMessage}
          onClose={resetNotificationOperationErrorHandler}
        />
      )}
    </aside>
  );
};

export default NotificationsList;
