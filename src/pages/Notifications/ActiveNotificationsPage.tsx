/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  selectNotificationContentLoadingState,
  selectNotification,
} from "../../store/selectors/notificationSelectors";
import { useAppSelector } from "../../store/hooks";
import { useNotificationQuery } from "../../hooks";

import ActiveNotification from "../../components/Notifications/ActiveNotification";
import { Spinner, Error } from "../../components/Layouts";

const ActiveNotificationsPage: React.FC = () => {
  const notification = useAppSelector(selectNotification);
  const { loading, error, message } = useAppSelector(
    selectNotificationContentLoadingState
  );

  const { getNotificationQuery, markNotificationAsReadQuery } =
    useNotificationQuery();

  const { notificationId } = useParams();

  useEffect(() => {
    notificationId && getNotificationQuery({ notifyId: notificationId });
  }, [notificationId]);

  useEffect(() => {
    if (notification && notification.read) return;

    notification && markNotificationAsReadQuery({ notifyId: notification._id });
  }, [notification]);

  return (
    <>
      {loading && <Spinner type="stand" />}

      {!loading && !error && <ActiveNotification />}

      {error && <Error boxType="inline" message={message} />}
    </>
  );
};

export default ActiveNotificationsPage;
