import React from "react";
import { NavLink } from "react-router-dom";

import { formatDate } from "../../../lib";

import { CommercialsListContainer } from "./commercialsList.styles";

interface CommercialItemType {}

const CommercialsList: React.FC<CommercialItemType> = (props) => {
  return (
    <CommercialsListContainer>
      {[1, 2, 3].map((commercial) => (
        <NavLink
          to={`linkable-${commercial}`}
          className={({ isActive }) =>
            `${isActive ? "active-commercial" : ""} commercial-item`
          }
          key={`commercial--${commercial}`}
        >
          <figure className="commercial-item__fig">
            <img
              src="https://frahmdigital.com/wp-content/uploads/2020/10/1970s-commercials.jpg"
              alt="commercial"
            />
          </figure>
          <div className="commercial-item__details">
            <p>
              Client: <span>superbowl</span>
            </p>
            <p>
              Valid until: <span>{formatDate(new Date(), "verbal")}</span>
            </p>
            <p>
              Position on:{" "}
              <span>
                <span>feed</span> <span>left</span> bar
              </span>
            </p>
            <p>
              Created at: <span>{formatDate(new Date(), "verbal")}</span>
            </p>
            <p>
              Last update: <span>{formatDate(new Date(), "verbal")}</span>
            </p>
          </div>
        </NavLink>
      ))}
    </CommercialsListContainer>
  );
};

export default CommercialsList;
