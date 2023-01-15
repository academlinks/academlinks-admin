import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { BsThreeDots } from "react-icons/bs";

import { NotificationT } from "../../interface/db/notification.types";
interface NotifyItemType {
  notify: NotificationT;
  deleteNotifyHandler: (params: { notifyId: string }) => void;
}

const NotifyItem: React.FC<NotifyItemType> = ({
  notify,
  deleteNotifyHandler,
}) => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <NavLink
      to={notify._id}
      onMouseLeave={() => openOptions && setOpenOptions(false)}
      className={({ isActive }) =>
        `${isActive ? "active-notify" : ""} notify-item ${
          !notify.read ? "unread" : ""
        }`
      }
    >
      <figure className="notify-item__fig">
        <img src={notify.from.profileImg} alt={notify.from.userName} />
      </figure>

      <div className="notify-item__details">
        <strong className="userName">{notify.from.userName}</strong>
        <span>&nbsp;{notify.message}</span>
      </div>

      <button
        className="notify-options--btn"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setOpenOptions((prev) => !prev);
        }}
      >
        <BsThreeDots />
      </button>

      {openOptions && (
        <div className="notify-item--options__modal">
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              deleteNotifyHandler({ notifyId: notify._id });
            }}
          >
            delete
          </button>
        </div>
      )}
    </NavLink>
  );
};

export default NotifyItem;
