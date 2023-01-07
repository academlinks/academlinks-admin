import { takeLatest } from "redux-saga/effects";

import {
  createCommercial,
  getCommercials,
} from "../../reducers/commercialsReducer";

import {
  createCommercialHandler,
  getCommercialsHandler,
} from "../handlers/commercialHandlers";

export default function* commercialSaga() {
  yield takeLatest(getCommercials, getCommercialsHandler);
  yield takeLatest(createCommercial, createCommercialHandler);
}
