import { call, put } from "redux-saga/effects";
import { showError, errorMessages } from "./errorHandler";

import {
  setLoadingStateError,
  setUsersForStatistic,
} from "../../reducers/statisticReducer";

import { getUsersForStatisticQuery } from "../api/statisticQueries";

export function* getUsersForStatisticHandler() {
  try {
    const { data } = yield call(getUsersForStatisticQuery);
    yield put(setUsersForStatistic(data));
  } catch (error: any) {
    yield showError({
      error,
      location: "getUsersForStatisticHandler",
      setter: setLoadingStateError,
      setterParams: {
        message: errorMessages.load,
      },
    });
  }
}
