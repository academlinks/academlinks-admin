import React from "react";

import { formatDate } from "../../lib";

import { ActiveCommercialContainer } from "./commercial.styled";

const ActiveCommercial: React.FC = () => {
  return (
    <ActiveCommercialContainer>
      <figure className="commercial-fig">
        <img
          src="https://frahmdigital.com/wp-content/uploads/2020/10/1970s-commercials.jpg"
          alt="commercial"
        />
      </figure>
      <div className="commercial-details">
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
    </ActiveCommercialContainer>
  );
};

export default ActiveCommercial;
