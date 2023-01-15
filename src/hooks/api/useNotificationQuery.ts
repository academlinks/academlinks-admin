import { useAppDispatch } from "../../store/hooks";

import {
  getNotification,
  getNotifications,
  deleteAllNotification,
  deleteNotification,
  markNotificationsAsSeen,
  markNotificationAsRead,
  resetOperationError,
  encreaseUnseenNotificationCount,
  setNewNotificationInList,
} from "../../store/reducers/notificationReducer";

import {
  GetNotificationT,
  DeleteNotificationT,
  MarkNotificationAsReadT,
} from "../../interface/reducers/notificationReducer.types";

import { NotificationT } from "../../interface/db/notification.types";

export default function useNotificationQuery() {
  const dispatch = useAppDispatch();

  function getNotificationsQuery() {
    dispatch(getNotifications());
  }

  function getNotificationQuery(params: GetNotificationT) {
    dispatch(getNotification(params));
  }

  function deleteNotificationQuery(params: DeleteNotificationT) {
    dispatch(deleteNotification(params));
  }

  function deleteAllNotificationsQuery() {
    dispatch(deleteAllNotification());
  }

  function markNotificationsAsSeenQuery() {
    dispatch(markNotificationsAsSeen());
  }

  function markNotificationAsReadQuery(params: MarkNotificationAsReadT) {
    dispatch(markNotificationAsRead(params));
  }

  function resetNotificationOperationErrorHandler() {
    dispatch(resetOperationError());
  }

  function handleEncreaseUnseenNotificationCount() {
    dispatch(encreaseUnseenNotificationCount());
  }

  function handleSetNewNotification(param: NotificationT) {
    dispatch(setNewNotificationInList(param));
  }

  return {
    getNotificationQuery,
    getNotificationsQuery,
    deleteNotificationQuery,
    deleteAllNotificationsQuery,
    markNotificationsAsSeenQuery,
    markNotificationAsReadQuery,
    resetNotificationOperationErrorHandler,
    handleEncreaseUnseenNotificationCount,
    handleSetNewNotification,
  };
}
