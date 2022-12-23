import { takeLatest } from "redux-saga/effects";

import { tester } from "../../reducers/registrationReducer";
import { testerHandler } from "../handlers/registrationHandlers";

export default function* registrationSaga() {
  yield takeLatest(tester, testerHandler);
}
