import React from "react";

import { useAppSelector } from "../../../store/hooks";
import {
  selectRegistrationLabels,
  selectRegistrationLabelsState,
} from "../../../store/selectors/registrationSelectors";

import { ListedUser, Spinner } from "../../Layouts";

interface RequestsListType {}

const RequestsList: React.FC<RequestsListType> = (props) => {
  const requests = useAppSelector(selectRegistrationLabels);
  const { loading, error } = useAppSelector(selectRegistrationLabelsState);

  return (
    <div className="requests-list">
      {loading && <Spinner />}
      {!loading &&
        !error &&
        requests.map((user) => (
          <ListedUser
            key={user._id}
            id={user._id}
            userName={user.userName}
            email={user.email}
            fig="default"
            gender={user.gender}
          />
        ))}
    </div>
  );
};

export default RequestsList;
