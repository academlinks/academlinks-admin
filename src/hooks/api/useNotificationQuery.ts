import { useAppDispatch } from "../../store/hooks";

import {
  getNotification,
  getNotifications,
  deleteAllNotification,
  deleteNotification,
  markNotificationsAsSeen,
  markNotificationAsRead,
} from "../../store/reducers/notificationReducer";

import {
  GetNotificationT,
  DeleteNotificationT,
  MarkNotificationAsReadT,
} from "../../interface/reducers/notificationReducer.types";

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

  return {
    getNotificationQuery,
    getNotificationsQuery,
    deleteNotificationQuery,
    deleteAllNotificationsQuery,
    markNotificationsAsSeenQuery,
    markNotificationAsReadQuery,
  };
}
