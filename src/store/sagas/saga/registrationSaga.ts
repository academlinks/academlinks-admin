import { takeLatest } from "redux-saga/effects";

import {
  getRegistrationLabels,
  getRegistrationRequesDetails,
} from "../../reducers/registrationReducer";

import {
  getRegistrationLabelsHandler,
  getRegistrationRequestDetails,
} from "../handlers/registrationHandlers";

export default function* registrationSaga() {
  yield takeLatest(getRegistrationLabels, getRegistrationLabelsHandler);
  yield takeLatest(getRegistrationRequesDetails, getRegistrationRequestDetails);
}
