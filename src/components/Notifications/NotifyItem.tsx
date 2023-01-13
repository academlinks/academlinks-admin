import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { BsThreeDots } from "react-icons/bs";

interface NotifyItemType {
  notify: {
    _id: string;
  };
}

const NotifyItem: React.FC<NotifyItemType> = ({ notify }) => {
  const [openOptions, setOpenOptions] = useState(false);

  return (
    <NavLink
      to={notify._id}
      onMouseLeave={() => openOptions && setOpenOptions(false)}
      className={({ isActive }) =>
        `${isActive ? "active-notify" : ""} notify-item`
      }
    >
      <figure className="notify-item__fig">
        <img
          src={
            "https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png"
          }
          alt={""}
        />
      </figure>

      <div className="notify-item__details">
        <strong className="userName">user name</strong>
        <span> change email</span>
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
