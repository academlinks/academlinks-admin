/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";
import { useNotificationQuery } from "../../hooks";
import {
  selectUnseenNotifiesCount,
  selectNotifications,
} from "../../store/selectors/notificationSelectors";

import Notifications from "../../components/Notifications/Notifications";

const NotificationsPage: React.FC = () => {
  const unseenNotifiesCount = useAppSelector(selectUnseenNotifiesCount);
  const notifications = useAppSelector(selectNotifications);

  const { getNotificationsQuery, markNotificationsAsSeenQuery } =
    useNotificationQuery();

  useEffect(() => {
    getNotificationsQuery();
  }, []);

  useEffect(() => {
    if (unseenNotifiesCount === 0 || !notifications[0]) return;
    markNotificationsAsSeenQuery();
  }, [notifications]);

  return (
    <Notifications>
      <Outlet />
    </Notifications>
  );
};

export default NotificationsPage;
