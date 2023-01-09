import { takeLatest } from "redux-saga/effects";

import {
  createCommercial,
  getCommercials,
  getCommercial,
  deleteCommercial,
  updateCommercial,
} from "../../reducers/commercialsReducer";

import {
  createCommercialHandler,
  getCommercialsHandler,
  getCommercialHandler,
  deleteCommercialHandler,
  updateCommercialHandler,
} from "../handlers/commercialHandlers";

export default function* commercialSaga() {
  yield takeLatest(createCommercial, createCommercialHandler);
  yield takeLatest(updateCommercial, updateCommercialHandler);
  yield takeLatest(deleteCommercial, deleteCommercialHandler);
  yield takeLatest(getCommercial, getCommercialHandler);
  yield takeLatest(getCommercials, getCommercialsHandler);
}
