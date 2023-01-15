import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";
import root from "./reducers/root";

import createSagaMiddleware from "@redux-saga/core";
import { initSagas } from "./sagas/initSagas";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: root,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat([sagaMiddleware]),
});

export type RootStateT = ReturnType<typeof store.getState>;
export type DispatchT = typeof store.dispatch;

initSagas(sagaMiddleware);

export const persistore = persistStore(store);
