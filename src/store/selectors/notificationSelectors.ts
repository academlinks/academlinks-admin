import { RootStateT } from "..";

export const selectNotificationSideBarLoadingState = ({
  notifications,
}: RootStateT) => notifications.sideBarLoadingState;

export const selectNotificationContentLoadingState = ({
  notifications,
}: RootStateT) => notifications.contentLoadingState;

export const selectNotificationOperationLoadingState = ({
  notifications,
}: RootStateT) => notifications.operationLoadingState;

////////////////////
export const selectUnseenNotifiesCount = ({ notifications }: RootStateT) =>
  notifications.unseenNotifiesCount;

export const selectNotifications = ({ notifications }: RootStateT) =>
  notifications.notifications;

export const selectNotification = ({ notifications }: RootStateT) =>
  notifications.notification;
