import React from "react";

import { WorkplaceT } from "../../../interface/db/db.types";
type DetailedWorkplaceType = WorkplaceT;

const DetailedWorkplace: React.FC<DetailedWorkplaceType> = ({
  company,
  description,
  position,
  workingYears,
}) => {
  return (
    <div>
      <span>works in</span>
      <strong>{company}</strong> as <strong>{position}</strong> from{" "}
      <strong>{workingYears.from}</strong> to <strong>{workingYears.to}</strong>
      {description && <p>{description}</p>}
    </div>
  );
};

export default DetailedWorkplace;
