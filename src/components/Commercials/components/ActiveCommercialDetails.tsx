import React from "react";
import { extractRootEndPointFromImg } from "../../../lib";

import { formatDate } from "../../../lib";
import { CommercialT } from "../../../interface/db/commercial.types";

interface ActiveCommercialDetailsType {
  commercial: CommercialT;
}

const ActiveCommercialDetails: React.FC<ActiveCommercialDetailsType> = ({
  commercial,
}) => {
  return (
    <>
      <figure className="commercial-fig">
        <img
          src={extractRootEndPointFromImg(commercial.media)}
          alt={commercial.client}
        />
      </figure>

      <div className="commercial-details">
        <p>
          Client: <span>{commercial.client}</span>
        </p>
        <p>
          Email: <span>{commercial.email}</span>
        </p>
        <p>
          Phone-Number: <span>{commercial.phone}</span>
        </p>
        <p>
          Valid until:{" "}
          <span>{formatDate(new Date(commercial.validUntil), "verbal")}</span>
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
          <span>{formatDate(new Date(commercial.createdAt), "verbal")}</span>
        </p>
        <p>
          Last update:{" "}
          <span>{formatDate(new Date(commercial.updatedAt), "verbal")}</span>
        </p>
      </div>
    </>
  );
};

export default ActiveCommercialDetails;
