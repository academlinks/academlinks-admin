import React from "react";
import { StatContainer } from "./statistcs.styled";
import { NavLink } from "react-router-dom";

interface StatisticsType {
  children: React.ReactNode;
}

const routes = [
  { label: "registration dates", route: "reg-dates" },
  { label: "gender", route: "gender" },
  { label: "users by position", route: "position" },
  { label: "users by institution", route: "institution" },
  { label: "users age range", route: "age-range" },
  { label: "users by current living place", route: "geo-current" },
  { label: "users by homeland", route: "geo-home" },
];

const Statistics: React.FC<StatisticsType> = ({ children }) => {
  return (
    <StatContainer data-content-container>
      <aside className="statistics-aside">
        {routes.map(({ label, route }) => (
          <NavLink
            to={route}
            key={label + route}
            className={({ isActive }) =>
              `${isActive ? "stat-route--active" : ""} stat-route`
            }
          >
            {label}
          </NavLink>
        ))}
      </aside>
      <div className="statistics-content--box">{children}</div>
    </StatContainer>
  );
};

export default Statistics;
