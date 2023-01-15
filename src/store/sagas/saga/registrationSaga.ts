import { takeLatest } from "redux-saga/effects";

import {
  getRegistrationLabels,
  getRegistrationRequesDetails,
  deleteRequest,
  aproveRequest,
} from "../../reducers/registrationReducer";

import {
  getRegistrationLabelsHandler,
  getRegistrationRequestDetailsHandler,
  aproveRequestHandler,
  deleteRequestHandler,
} from "../handlers/registrationHandlers";

export default function* registrationSaga() {
  yield takeLatest(getRegistrationLabels, getRegistrationLabelsHandler);
  yield takeLatest(
    getRegistrationRequesDetails,
    getRegistrationRequestDetailsHandler
  );
  yield takeLatest(aproveRequest, aproveRequestHandler);
  yield takeLatest(deleteRequest, deleteRequestHandler);
}
