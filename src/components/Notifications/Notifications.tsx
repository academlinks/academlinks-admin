import React from "react";

import { NotificationsContainer } from "./notifications.styles";
import NotificationsList from "./NotificationsList";

interface NotificationsType {
  children: React.ReactNode;
}

const Notifications: React.FC<NotificationsType> = ({ children }) => {
  return (
    <NotificationsContainer data-content-container>
      <NotificationsList />
      <div className="notifications-content">{children}</div>
    </NotificationsContainer>
  );
};

export default Notifications;
