import { call, put } from "redux-saga/effects";

import { showError, errorMessages } from "./errorHandler";

import {
  setOperationError,
  setOperationSuccess,
  setSideBarError,
  setContentError,
  setCommercials,
  setCommercial,
  setDeletedCommercial,
  setUpdatedCommercial,
  setCommercialSuccessfullCreation,
} from "../../reducers/commercialsReducer";

import {
  createCommercialQuery,
  getCommercialsQuery,
  getCommercialQuery,
  deleteCommercialQuery,
  updateCommercialQuery,
} from "../api/commercialQueries";

import {
  CreateCommercialPropsT,
  UpdateCommercialPropsT,
  GetCommercialsPropsT,
  GetCommercialPropsT,
  DeleteCommercialPropsT,
} from "../../../interface/reducers/commercialReducer.types";

export function* createCommercialHandler({
  payload,
}: {
  payload: CreateCommercialPropsT;
}) {
  try {
    yield call(createCommercialQuery, payload);
    yield put(setOperationSuccess());
    yield put(setCommercialSuccessfullCreation(true));
  } catch (error: any) {
    yield showError({
      error,
      location: "createCommercialHandler",
      setter: setOperationError,
      setterParams: {
        message: errorMessages.operation,
      },
    });
  }
}

export function* updateCommercialHandler({
  payload: { body, commercialId },
}: {
  payload: UpdateCommercialPropsT;
}) {
  try {
    yield call(updateCommercialQuery, body, commercialId);
    yield put(setUpdatedCommercial({ commercialId }));
  } catch (error: any) {
    yield showError({
      error,
      location: "createCommercialHandler",
      setter: setOperationError,
      setterParams: {
        message: errorMessages.operation,
      },
    });
  }
}

export function* deleteCommercialHandler({
  payload,
}: {
  payload: DeleteCommercialPropsT;
}) {
  try {
    yield call(deleteCommercialQuery, payload);
    yield put(setDeletedCommercial(payload));
  } catch (error: any) {
    yield showError({
      error,
      location: "deleteCommercialHandler",
      setter: setOperationError,
      setterParams: {
        message: errorMessages.operation,
      },
    });
  }
}

export function* getCommercialHandler({
  payload,
}: {
  payload: GetCommercialPropsT;
}) {
  try {
    const { data } = yield call(getCommercialQuery, payload);
    yield put(setCommercial(data));
  } catch (error: any) {
    yield showError({
      error,
      location: "getCommercialHandler",
      setter: setContentError,
      setterParams: {
        message: errorMessages.load,
      },
    });
  }
}

export function* getCommercialsHandler({
  payload,
}: {
  payload: GetCommercialsPropsT;
}) {
  try {
    const { data } = yield call(getCommercialsQuery, payload);
    yield put(setCommercials(data));
  } catch (error: any) {
    yield showError({
      error,
      location: "getCommercialsHandler",
      setter: setSideBarError,
      setterParams: {
        message: errorMessages.load,
      },
    });
  }
}
