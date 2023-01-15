import { call, put } from "redux-saga/effects";
import { showError, errorMessages } from "./errorHandler";

import {
  setSideBarError,
  setContentError,
  setOperationError,
  setNotifications,
  setNotification,
  setDeletedNotification,
  setDeletedNotifications,
  setNotificationsAsSeen,
  setMarkNotificationAsRead,
} from "../../reducers/notificationReducer";

import {
  getNotificationsQuery,
  getNotificationQuery,
  deleteAllNotificationsQuery,
  deleteNotificationQuery,
  markNotificationsAsSeenQuery,
  markNotificationAsReadQuery,
} from "../api/notificationQueries";

import {
  GetNotificationT,
  DeleteNotificationT,
  MarkNotificationAsReadT,
} from "../../../interface/reducers/notificationReducer.types";

export function* getNotificationsHandler() {
  try {
    const { data } = yield call(getNotificationsQuery);
    yield put(setNotifications(data));
  } catch (error: any) {
    yield showError({
      error,
      location: "getNotificationsHandler",
      setter: setSideBarError,
      setterParams: {
        message: errorMessages.load,
      },
    });
  }
}

export function* getNotificationHandler({
  payload,
}: {
  payload: GetNotificationT;
}) {
  try {
    const { data } = yield call(getNotificationQuery, payload);
    yield put(setNotification(data));
  } catch (error: any) {
    yield showError({
      error,
      location: "getNotificationHandler",
      setter: setContentError,
      setterParams: {
        message: errorMessages.load,
      },
    });
  }
}

export function* deleteAllNotificationsHandler() {
  try {
    yield call(deleteAllNotificationsQuery);
    yield put(setDeletedNotifications());
  } catch (error: any) {
    yield showError({
      error,
      location: "deleteAllNotificationsHandler",
      setter: setOperationError,
      setterParams: {
        message: errorMessages.operation,
      },
    });
  }
}

export function* deleteNotificationHandler({
  payload,
}: {
  payload: DeleteNotificationT;
}) {
  try {
    yield call(deleteNotificationQuery, payload);
    yield put(setDeletedNotification(payload));
  } catch (error: any) {
    yield showError({
      error,
      location: "deleteNotificationsHandler",
      setter: setOperationError,
      setterParams: {
        message: errorMessages.operation,
      },
    });
  }
}

export function* markNotificationsAsSeenHandler() {
  try {
    yield call(markNotificationsAsSeenQuery);
    yield put(setNotificationsAsSeen());
  } catch (error: any) {
    yield showError({
      error,
      location: "markNotificationsAsSeenHandler",
      setter: setOperationError,
      setterParams: {
        message: errorMessages.operation,
      },
    });
  }
}

export function* markNotificationAsReadHandler({
  payload,
}: {
  payload: MarkNotificationAsReadT;
}) {
  try {
    yield call(markNotificationAsReadQuery, payload);
    yield put(setMarkNotificationAsRead(payload));
  } catch (error: any) {
    yield showError({
      error,
      location: "markNotificationAsReadHandler",
      setter: setOperationError,
      setterParams: {
        message: errorMessages.operation,
      },
    });
  }
}
