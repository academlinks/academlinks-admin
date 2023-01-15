import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../../Layouts";

import { CommercialT } from "../../../interface/db/commercial.types";
interface ActiveCommercialActionBTNsType {
  commercial: CommercialT;
  sendEmailToCustomer: boolean;
  setSendEmailToCustomer: (param: boolean) => void;
  deleteCommercialQuery: (param: { commercialId: string }) => void;
  handleEmail: () => void;
}

const ActiveCommercialActionBTNs: React.FC<ActiveCommercialActionBTNsType> = ({
  commercial,
  sendEmailToCustomer,
  setSendEmailToCustomer,
  deleteCommercialQuery,
  handleEmail,
}) => {
  const navigate = useNavigate();

  return (
    <div className="comemrcial-actions__btn-box">
      {sendEmailToCustomer && (
        <>
          <Button
            label="cancel"
            task="cancel"
            onClick={() => setSendEmailToCustomer(false)}
          />

          <Button label="send email" task="aprove" onClick={handleEmail} />
        </>
      )}
      {!sendEmailToCustomer && (
        <>
          <Button
            label="send email to customer"
            task="aprove"
            onClick={() => setSendEmailToCustomer(true)}
          />

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
        </>
      )}
    </div>
  );
};

export default ActiveCommercialActionBTNs;
