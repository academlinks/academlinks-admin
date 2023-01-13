import React from "react";

import NotifyItem from "./NotifyItem";

const NotificationsList: React.FC = () => {
  return (
    <aside className="notifications-aside">
      <div className="notifications-list">
        {["notify-1", "notify-2"].map((notify) => (
          <NotifyItem key={notify} notify={{ _id: notify }} />
        ))}
      </div>
    </aside>
  );
};

export default NotificationsList;
