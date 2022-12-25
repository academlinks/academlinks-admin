import React from "react";
import usersList from "../../../utils/usersShort.json";
import { ListedUser } from "../../Layouts";

interface RequestsListType {}

const RequestsList: React.FC<RequestsListType> = (props) => {
  return (
    <div className="requests-list">
      {usersList.map((user) => (
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
