import React from "react";

interface DetailedItemType {
  label: string;
  data: string;
}

const DetailedItem: React.FC<DetailedItemType> = ({ label, data }) => {
  return (
    <div>
      <span>{label} - </span>
      <span>{data}</span>
    </div>
  );
};

export default DetailedItem;
