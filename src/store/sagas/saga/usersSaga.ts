import { takeLatest } from "redux-saga/effects";

import { getUserLabels, getUserDetails } from "../../reducers/userReducer";

import {
  getUserLabelsHandler,
  getUserDetailsHandler,
} from "../handlers/usersHandlers";

export default function* userSaga() {
  yield takeLatest(getUserLabels, getUserLabelsHandler);
  yield takeLatest(getUserDetails, getUserDetailsHandler);
}
