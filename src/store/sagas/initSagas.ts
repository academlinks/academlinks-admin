import * as sagas from "./saga";

export const initSagas = (sagaMiddleware: any) =>
  Object.values(sagas).forEach((saga) => sagaMiddleware.run(saga));
