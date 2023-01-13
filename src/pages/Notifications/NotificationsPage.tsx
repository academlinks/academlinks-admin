import React from "react";
import { Outlet } from "react-router-dom";

import Notifications from "../../components/Notifications/Notifications";

const NotificationsPage: React.FC = () => {
  return (
    <Notifications>
      <Outlet />
    </Notifications>
  );
};

export default NotificationsPage;
