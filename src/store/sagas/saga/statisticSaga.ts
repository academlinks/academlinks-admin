import { takeLatest } from "redux-saga/effects";

import { getUsersForStatistic } from "../../reducers/statisticReducer";

import { getUsersForStatisticHandler } from "../handlers/statisticHandlers";

export default function* statisticSaga() {
  yield takeLatest(getUsersForStatistic, getUsersForStatisticHandler);
}
