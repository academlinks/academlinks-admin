import { NotificationT } from "../db/notification.types";

export interface StateT {
  sideBarLoadingState: LoadingStateT;
  contentLoadingState: LoadingStateT;
  operationLoadingState: LoadingStateT;
  unseenNotifiesCount: UnseenNotifiesCountT;
  notifications: NotificationT[];
  notification: NotificationT | null;
}

interface LoadingStateT {
  loading: boolean;
  error: boolean;
  message: string;
}

export type UnseenNotifiesCountT = number;

// props

export type GetNotificationT = {
  notifyId: string;
};

export type DeleteNotificationT = {
  notifyId: string;
};

export type MarkNotificationAsReadT = {
  notifyId: string;
};
