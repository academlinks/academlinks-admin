import { call } from "redux-saga/effects";

import { TesterT } from "../../reducers/registrationReducer";

import { getTesterQuery } from "../api/registrationQueries";

export function* testerHandler({ payload }: { payload: TesterT }) {
  try {
    yield call(getTesterQuery, payload);
  } catch (error) {
    console.log(error);
  }
}
