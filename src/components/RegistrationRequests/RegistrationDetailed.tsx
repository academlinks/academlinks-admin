import React from "react";

import { useAppSelector } from "../../store/hooks";
import { useRegistrationQuery } from "../../hooks";
import {
  selectRegistrationRequestDetails,
  selectRegistrationOperationLoadingState,
} from "../../store/selectors/registrationSelectors";

import {
  DetailedItem,
  DetailedLivingPlace,
  DetailedRegistrationBio,
  Button,
  Spinner,
  Error,
} from "../Layouts";

const RegistrationDetailed: React.FC = () => {
  const details = useAppSelector(selectRegistrationRequestDetails);

  const { loading, error, message } = useAppSelector(
    selectRegistrationOperationLoadingState
  );

  const { aproveRequestQuery, deleteRequestQuery, handleResetOperationError } =
    useRegistrationQuery();

  return (
    <div className="registration-detailed">
      {loading && <Spinner type="stand" />}

      {error && (
        <Error
          boxType="modal"
          message={message}
          onClose={handleResetOperationError}
        />
      )}

      <DetailedItem label="firstname" data={details?.firstName!} />
      <DetailedItem label="lastname" data={details?.lastName!} />
      <DetailedItem label="email" data={details?.email!} />
      <DetailedItem label="gender" data={details?.gender!} />
      <DetailedLivingPlace
        label="from"
        city={details?.from.city!}
        country={details?.from.country!}
      />
      <DetailedLivingPlace
        label="lives in"
        city={details?.currentLivingPlace.city!}
        country={details?.currentLivingPlace.country!}
      />
      <DetailedRegistrationBio
        registrationBio={details?.registrationBio!}
        className="last"
      />
      {!details?.aproved && (
        <div className="btn-box">
          <Button
            label="delete"
            task="delete"
            onClick={() =>
              deleteRequestQuery({ registrationId: details?._id! })
            }
          />
          <Button
            label="aprove"
            onClick={() =>
              aproveRequestQuery({ registrationId: details?._id! })
            }
          />
        </div>
      )}
    </div>
  );
};

export default RegistrationDetailed;
