/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";

import { formatDate } from "../../lib";
import {
  selectCommercial,
  selectCommercialOperationLoadingState,
} from "../../store/selectors/commercialSelectors";
import { useCommercialQuery } from "../../hooks";

import { ActiveCommercialContainer } from "./commercial.styled";
import { Button, Spinner, Error } from "../Layouts";

const ActiveCommercial: React.FC = () => {
  const navigate = useNavigate();

  const commercial = useAppSelector(selectCommercial);

  const { loading, error, message } = useAppSelector(
    selectCommercialOperationLoadingState
  );

  const { deleteCommercialQuery, handleResetOperationError } =
    useCommercialQuery();

  return (
    <>
      {loading && <Spinner type="stand" />}

      {error && (
        <Error
          boxType="modal"
          message={message}
          onClose={handleResetOperationError}
        />
      )}

      <ActiveCommercialContainer>
        {commercial && (
          <>
            <figure className="commercial-fig">
              <img src={commercial.media} alt={commercial.client} />
            </figure>

            <div className="commercial-details">
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

            <div className="comemrcial-crud__btn">
              <Button
                label="update"
                task="aprove"
                onClick={() =>
                  navigate("/dashboard/commercials/create", {
                    replace: true,
                    state: { commercial, operation: "update" },
                  })
                }
              />
              <Button
                label="delete"
                task="delete"
                onClick={() =>
                  deleteCommercialQuery({ commercialId: commercial._id })
                }
              />
            </div>
          </>
        )}
      </ActiveCommercialContainer>
    </>
  );
};

export default ActiveCommercial;
