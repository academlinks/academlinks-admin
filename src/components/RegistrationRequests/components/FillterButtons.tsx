import React from "react";

import { useAppSelector } from "../../../store/hooks";
import { useRegistrationQuery } from "../../../hooks";
import { selectRegistrationFilterKey } from "../../../store/selectors/registrationSelectors";

import { Button } from "../../Layouts";

const FillterButtons: React.FC = () => {
  const filterKey = useAppSelector(selectRegistrationFilterKey);

  const { handleFilterKey } = useRegistrationQuery();

  return (
    <div className="fillter-btns--box">
      <Button
        label="new"
        task={filterKey === "new" ? "aprove" : "cancel"}
        onClick={() => handleFilterKey("new")}
      />
      <Button
        label="aproved"
        task={filterKey === "aproved" ? "aprove" : "cancel"}
        onClick={() => handleFilterKey("aproved")}
      />
    </div>
  );
};

export default FillterButtons;
