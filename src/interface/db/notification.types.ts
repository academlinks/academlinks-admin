export interface NotificationT {
  _id: string;
  from: {
    _id: string;
    userName: string;
    profileImg: string;
    email?: string;
  };
  message: string;
  read: boolean;
  seen: boolean;
  options: {
    oldEmail?: string;
    newEmail?: string;
  };
}
