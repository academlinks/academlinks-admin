import { call, put } from "redux-saga/effects";
import { showError, errorMessages } from "./errorHandler";

import {
  setLabelError,
  setContentError,
  setRegistrationLabels,
  setRegistrationRequestDetails,
  removeRequest,
} from "../../reducers/registrationReducer";

import {
  getRegistrationLabelsQuery,
  getRegistrationRequestDetailsQuery,
  aproveRequestQuery,
  deleteRequestQuery,
} from "../api/registrationQueries";

import {
  GetRegistrationRequestDetailsPropsT,
  RequestMutationPropsT,
  FilterKeyT,
} from "../../../interface/reducers/registrationReducer.types";

export function* getRegistrationLabelsHandler({
  payload,
}: {
  payload: FilterKeyT;
}) {
  try {
    const { data } = yield call(getRegistrationLabelsQuery, payload);
    yield put(setRegistrationLabels(data));
  } catch (error: any) {
    showError({
      error,
      location: "getRegistrationLabelsHandler",
      setter: setLabelError,
      setterParams: {
        message: errorMessages.load,
      },
    });
  }
}

export function* getRegistrationRequestDetailsHandler({
  payload: { registrationId },
}: {
  payload: GetRegistrationRequestDetailsPropsT;
}) {
  try {
    const { data } = yield call(getRegistrationRequestDetailsQuery, {
      registrationId,
    });

    yield put(setRegistrationRequestDetails(data));
  } catch (error: any) {
    showError({
      error,
      location: "getRegistrationRequestDetails",
      setter: setContentError,
      setterParams: {
        message: errorMessages.load,
      },
    });
  }
}

export function* aproveRequestHandler({
  payload: { registrationId },
}: {
  payload: RequestMutationPropsT;
}) {
  try {
    yield call(aproveRequestQuery, { registrationId });
    yield put(removeRequest({ registrationId }));
  } catch (error: any) {
    showError({
      error,
      location: "aproveRequestHandler",
      setter: setContentError,
      setterParams: {
        message: errorMessages.load,
      },
    });
  }
}

export function* deleteRequestHandler({
  payload: { registrationId },
}: {
  payload: RequestMutationPropsT;
}) {
  try {
    yield call(deleteRequestQuery, { registrationId });
    yield put(removeRequest({ registrationId }));
  } catch (error: any) {
    showError({
      error,
      location: "aproveRequestHandler",
      setter: setContentError,
      setterParams: {
        message: errorMessages.load,
      },
    });
  }
}
