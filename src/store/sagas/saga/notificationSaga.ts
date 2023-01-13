import { takeLatest } from "redux-saga/effects";

import {
  getNotification,
  getNotifications,
  deleteAllNotification,
  deleteNotification,
  markNotificationsAsSeen,
  markNotificationAsRead,
} from "../../reducers/notificationReducer";

import {
  getNotificationHandler,
  getNotificationsHandler,
  deleteAllNotificationsHandler,
  deleteNotificationHandler,
  markNotificationsAsSeenHandler,
  markNotificationAsReadHandler,
} from "../handlers/notificationHandlers";

export default function* notificationSaga() {
  yield takeLatest(getNotification, getNotificationHandler);
  yield takeLatest(getNotifications, getNotificationsHandler);
  yield takeLatest(deleteAllNotification, deleteAllNotificationsHandler);
  yield takeLatest(deleteNotification, deleteNotificationHandler);
  yield takeLatest(markNotificationsAsSeen, markNotificationsAsSeenHandler);
  yield takeLatest(markNotificationAsRead, markNotificationAsReadHandler);
}
