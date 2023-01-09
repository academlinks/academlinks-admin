import { call, put } from "redux-saga/effects";
import { showError, errorMessages } from "./errorHandler";

import {
  setSideBarError,
  setContentError,
  setOperationError,
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
    yield showError({
      error,
      location: "getRegistrationLabelsHandler",
      setter: setSideBarError,
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
    yield showError({
      error,
      location: "getRegistrationRequestDetailsHandler",
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
    yield showError({
      error,
      location: "aproveRequestHandler",
      setter: setOperationError,
      setterParams: {
        message: errorMessages.operation,
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
    yield showError({
      error,
      location: "deleteRequestHandler",
      setter: setOperationError,
      setterParams: {
        message: errorMessages.operation,
      },
    });
  }
}
