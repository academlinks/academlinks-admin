import React, { useContext } from "react";
import { ThemeContext } from "../../Theme";

import { nanoid } from "@reduxjs/toolkit";
import { NavLink } from "react-router-dom";

import { useAuthQuery } from "../../hooks";

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
];

const Navigation: React.FC = () => {
  const { changeThemeHandler, mode } = useContext(ThemeContext);
  const { logoutQuery } = useAuthQuery();

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
          </NavLink>
        ))}
      </ul>
    </Nav>
  );
};

export default Navigation;
