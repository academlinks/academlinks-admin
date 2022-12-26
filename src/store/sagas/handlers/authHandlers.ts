import { call, put } from "redux-saga/effects";

import { setAdmin } from "../../reducers/authenticationReducer";

import { loginQuery, logoutQuery } from "../api/authQueries";

import { AuthCredentialsT } from "../../../interface/reducers/authReducer.types";

export function* loginHandler({
  payload: { password, userName },
}: {
  payload: AuthCredentialsT;
}) {
  try {
    const { data } = yield call(loginQuery, { password, userName });
    console.log(data);
    yield put(setAdmin(data));
  } catch (error) {}
}

export function* logoutHandler() {
  try {
    yield call(logoutQuery);
  } catch (error) {}
}
