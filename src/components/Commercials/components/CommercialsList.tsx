import React from "react";
import { NavLink } from "react-router-dom";

import { useAppSelector } from "../../../store/hooks";

import {
  selectCommercialSideBarLoadingState,
  selectCommercialsList,
} from "../../../store/selectors/commercialSelectors";
import { formatDate } from "../../../lib";

import { CommercialsListContainer } from "./commercialsList.styles";
import { Spinner, Error } from "../../Layouts";

const CommercialsList: React.FC = () => {
  const { loading, error, message } = useAppSelector(
    selectCommercialSideBarLoadingState
  );

  const commercials = useAppSelector(selectCommercialsList);

  return (
    <CommercialsListContainer>
      {loading && <Spinner type="stand" />}

      {error && <Error boxType="inline" message={message} />}

      {!loading &&
        !error &&
        commercials.map((commercial) => (
          <NavLink
            to={commercial._id}
            className={({ isActive }) =>
              `${isActive ? "active-commercial" : ""} commercial-item`
            }
            key={commercial._id}
          >
            <figure className="commercial-item__fig">
              <img src={commercial.media} alt={commercial.client} />
            </figure>
            <div className="commercial-item__details">
              <p>
                Client: <span>{commercial.client}</span>
              </p>
              <p>
                Valid until:{" "}
                <span>
                  {formatDate(new Date(commercial.validUntil), "verbal")}
                </span>
              </p>
              <p>
                Position on:{" "}
                <span>
                  <span>{commercial.location.page}</span>{" "}
                  <span>{commercial.location.side}</span> bar
                </span>
              </p>
              <p>
                Created at:{" "}
                <span>
                  {formatDate(new Date(commercial.createdAt), "verbal")}
                </span>
              </p>
              <p>
                Last update:{" "}
                <span>
                  {formatDate(new Date(commercial.updatedAt), "verbal")}
                </span>
              </p>
            </div>
          </NavLink>
        ))}
    </CommercialsListContainer>
  );
};

export default CommercialsList;
