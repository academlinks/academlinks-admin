import React, { useState } from "react";

import { Button } from "..";
import MediaModal from "./MediaModal";
import { UserDetailsHeaderContainer } from "./userDetailsHeader.styles";

interface UserDetailsHeaderType {
  userDetails: {
    profileImg: string;
    userName: string;
    email: string;
    _id: string;
  };
  deleteUserHandler: ({ userId }: { userId: string }) => void;
}

const UserDetailsHeader: React.FC<UserDetailsHeaderType> = ({
  userDetails,
  deleteUserHandler,
}) => {
  const [openMedia, setOpenMedia] = useState(false);

  return (
    <UserDetailsHeaderContainer>
      {openMedia && (
        <MediaModal
          fig={userDetails.profileImg}
          onClose={() => setOpenMedia(false)}
        />
      )}

      <div className="details-header">
        <figure
          className="details-header__fig"
          onClick={(e) => {
            e.stopPropagation();
            setOpenMedia(true);
          }}
        >
          <img src={userDetails.profileImg} alt={userDetails.userName} />
        </figure>

        <span className="details-header__userName">{userDetails.userName}</span>

        <span className="details-header__email">{userDetails.email}</span>

        <Button
          label="delete user"
          task="delete"
          onClick={() => deleteUserHandler({ userId: userDetails._id })}
        />
      </div>
    </UserDetailsHeaderContainer>
  );
};

export default UserDetailsHeader;
