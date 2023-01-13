import { RootStateT } from "..";

export const selectUnseenNotifiesCount = ({ notifications }: RootStateT) =>
  notifications.unseenNotifiesCount;
