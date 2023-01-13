/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { nanoid } from "@reduxjs/toolkit";

import { ThemeContext } from "../../Theme";

import { useAdminQuery } from "../../hooks";
import { useAppSelector } from "../../store/hooks";

import { selectUnseenRequestsCount } from "../../store/selectors/registrationSelectors";
import { selectUnseenNotifiesCount } from "../../store/selectors/notificationSelectors";
import { selectOutdateCommercialsCount } from "../../store/selectors/commercialSelectors";

import { Nav } from "./nav.styles";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";

const navRoutes = [
  {
    label: "registration requests",
    id: nanoid(),
    path: "registration-requests",
  },
  {
    label: "users",
    id: nanoid(),
    path: "users",
  },
  {
    label: "commercials",
    id: nanoid(),
    path: "commercials?active=true",
  },
  {
    label: "statistics",
    id: nanoid(),
    path: "statistics",
  },
  {
    label: "notifications",
    id: nanoid(),
    path: "notifications",
  },
];

const Navigation: React.FC = () => {
  const { changeThemeHandler, mode } = useContext(ThemeContext);
  const { logoutQuery, getAppBadgesQuery } = useAdminQuery();

  const unseenReqCount = useAppSelector(selectUnseenRequestsCount);
  const unseenNotifiesCount = useAppSelector(selectUnseenNotifiesCount);
  const outdatedCommercialsCount = useAppSelector(
    selectOutdateCommercialsCount
  );

  useEffect(() => {
    getAppBadgesQuery();
  }, []);

  return (
    <Nav data-page-navigation>
      <div className="nav-header">
        <button className="theme-btn" onClick={() => changeThemeHandler()}>
          {mode === "dark" ? <BsFillSunFill /> : <BsFillMoonFill />}
        </button>
        <button className="btn-logout" onClick={logoutQuery}>
          log out
        </button>
      </div>

      <ul className="nav-list">
        {navRoutes.map((route) => (
          <NavLink
            to={route.path}
            key={route.id}
            className={({ isActive }) =>
              `${isActive ? "active-nav-link" : ""} nav-link`
            }
          >
            {route.label}
            {route.path === "registration-requests" && unseenReqCount > 0 && (
              <span className="nav-badge">{unseenReqCount}</span>
            )}
            {route.path === "notifications" && unseenNotifiesCount > 0 && (
              <span className="nav-badge">{unseenNotifiesCount}</span>
            )}
            {route.path === "commercials?active=true" &&
              outdatedCommercialsCount > 0 && (
                <span className="nav-badge">{outdatedCommercialsCount}</span>
              )}
          </NavLink>
        ))}
      </ul>
    </Nav>
  );
};

export default Navigation;
