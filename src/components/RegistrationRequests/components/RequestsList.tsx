import React from "react";

import { useAppSelector } from "../../../store/hooks";

import { ListedUser } from "../../Layouts";

interface RequestsListType {}

const RequestsList: React.FC<RequestsListType> = (props) => {
  const requests = useAppSelector(
    (state) => state.registration.registrationLabels
  );

  return (
    <div className="requests-list">
      {requests[0] &&
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
