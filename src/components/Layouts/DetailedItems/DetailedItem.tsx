import React from "react";

import { DetailedItemContainer } from "./detailedItem.styles";

interface DetailedItemType {
  label: string;
  data?: string;
  icon?: React.ReactNode;
}

const DetailedItem: React.FC<DetailedItemType> = ({ label, data, icon }) => {
  return (
    <DetailedItemContainer data-detailed-item className={icon ? "grid" : ""}>
      {icon && <span className="icon-box">{icon}</span>}
      <div className="details-wrapper">
        <span>{label} - </span>
        <span className={!["email", "age"].includes(label) ? "capitalize" : ""}>
          {data}
        </span>
      </div>
    </DetailedItemContainer>
  );
};

export default DetailedItem;
