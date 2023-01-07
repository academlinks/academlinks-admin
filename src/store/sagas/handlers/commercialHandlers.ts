import { call, put } from "redux-saga/effects";

import { showError } from "./errorHandler";

import {
  setOperationError,
  setOperationSuccess,
} from "../../reducers/commercialsReducer";

import {
  createCommercialQuery,
  getCommercialsQuery,
} from "../api/commercialQueries";

import {
  CreateCommercialPropsT,
  GetCommercialsPropsT,
} from "../../../interface/reducers/commercialReducer.types";

export function* createCommercialHandler({
  payload,
}: {
  payload: CreateCommercialPropsT;
}) {
  try {
    yield call(createCommercialQuery, payload);
    yield put(setOperationSuccess());
  } catch (error: any) {
    yield showError({
      error,
      location: "createCommercialHandler",
      setter: setOperationError,
      setterParams: {
        message: "occured error during creting commercial",
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
    yield call(getCommercialsQuery, payload);
  } catch (error) {}
}
