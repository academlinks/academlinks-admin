import { call, put } from "redux-saga/effects";

import {
  setRegistrationLabels,
  setRegistrationRequestDetails,
} from "../../reducers/registrationReducer";

import {
  getRegistrationLabelsQuery,
  getRegistrationRequestDetailsQuery,
} from "../api/registrationQueries";

import { GetRegistrationRequestDetailsPropsT } from "../../../interface/reducers/registrationReducer.types";

export function* getRegistrationLabelsHandler() {
  try {
    const { data } = yield call(getRegistrationLabelsQuery);
    yield put(setRegistrationLabels(data));
  } catch (error) {}
}

export function* getRegistrationRequestDetails({
  payload: { registrationId },
}: {
  payload: GetRegistrationRequestDetailsPropsT;
}) {
  try {
    const { data } = yield call(getRegistrationRequestDetailsQuery, {
      registrationId,
    });

    yield put(setRegistrationRequestDetails(data));
  } catch (error) {}
}
