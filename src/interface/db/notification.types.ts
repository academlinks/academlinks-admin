export interface NotificationT {
  _id: string;
  from: string;
  message: string;
  read: boolean;
  seen: boolean;
  options: {
    oldEmail?: string;
    newEmail?: string;
  };
}
