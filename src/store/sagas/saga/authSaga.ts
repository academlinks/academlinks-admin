import { takeLatest } from "redux-saga/effects";

import { login, logOut } from "../../reducers/authenticationReducer";

import { loginHandler, logoutHandler } from "../handlers/authHandlers";

export default function* authSage() {
  yield takeLatest(login, loginHandler);
  yield takeLatest(logOut, logoutHandler);
}
