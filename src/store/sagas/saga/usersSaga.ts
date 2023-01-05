import { takeLatest } from "redux-saga/effects";

import {
  getUserLabels,
  getUserDetails,
  deleteUser,
} from "../../reducers/userReducer";

import {
  getUserLabelsHandler,
  getUserDetailsHandler,
  deleteUserHandler,
} from "../handlers/usersHandlers";

export default function* userSaga() {
  yield takeLatest(getUserLabels, getUserLabelsHandler);
  yield takeLatest(getUserDetails, getUserDetailsHandler);
  yield takeLatest(deleteUser, deleteUserHandler);
}
