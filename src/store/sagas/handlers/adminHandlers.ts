import { call, put } from "redux-saga/effects";
import { showError } from "./errorHandler";

import { setAdmin } from "../../reducers/adminReducer";
import { setUnseenRegRequestsQount } from "../../reducers/registrationReducer";
import { setUnseenNotificationsCount } from "../../reducers/notificationReducer";
import { setOutDatedCommercialsCount } from "../../reducers/commercialsReducer";

import { loginQuery, logoutQuery, getBadgesQuery } from "../api/adminQueries";

import { AuthCredentialsT } from "../../../interface/reducers/authReducer.types";

export function* loginHandler({
  payload: { password, userName },
}: {
  payload: AuthCredentialsT;
}) {
  try {
    const { data } = yield call(loginQuery, { password, userName });
    yield put(setAdmin(data));
  } catch (error) {}
}

export function* logoutHandler() {
  try {
    yield call(logoutQuery);
  } catch (error) {}
}

export function* getBadgesHandler() {
  try {
    const { data } = yield call(getBadgesQuery);

    yield put(setUnseenRegRequestsQount(data.regRequestCount));
    yield put(setUnseenNotificationsCount(data.unseenNotifications));
    yield put(setOutDatedCommercialsCount(data.outdatedCommercialsCount));
  } catch (error: any) {
    yield showError({ error, location: "getBadgesHandler" });
  }
}
