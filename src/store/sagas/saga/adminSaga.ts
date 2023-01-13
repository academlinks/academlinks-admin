import { takeLatest } from "redux-saga/effects";

import {
  login,
  logOut,
  getAppBadges,
} from "../../reducers/authenticationReducer";

import {
  loginHandler,
  logoutHandler,
  getBadgesHandler,
} from "../handlers/adminHandlers";

export default function* adminSage() {
  yield takeLatest(login, loginHandler);
  yield takeLatest(logOut, logoutHandler);
  yield takeLatest(getAppBadges, getBadgesHandler);
}
