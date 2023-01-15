import { call, put } from "redux-saga/effects";
import { showError, errorMessages } from "./errorHandler";

import {
  setSideBarError,
  setContentError,
  setOperationError,
  setUserLabels,
  setUserDetails,
  setDeletedUser,
} from "../../reducers/userReducer";

import {
  getUserLabelsQuery,
  getUserDetailsQuery,
  deleteUserQuery,
} from "../api/usersQueries";

import {
  GetUserLabelPropsT,
  GetUserDetailsPropsT,
  DeleteUserPropsT,
} from "../../../interface/reducers/usersReducer.types";

export function* getUserLabelsHandler({
  payload,
}: {
  payload: GetUserLabelPropsT;
}) {
  try {
    const { data } = yield call(getUserLabelsQuery, payload);
    yield put(setUserLabels(data.users));
  } catch (error: any) {
    yield showError({
      error,
      location: "getUserLabelsHandler",
      setter: setSideBarError,
      setterParams: {
        message: errorMessages.load,
      },
    });
  }
}

export function* getUserDetailsHandler({
  payload,
}: {
  payload: GetUserDetailsPropsT;
}) {
  try {
    const { data } = yield call(getUserDetailsQuery, payload);
    yield put(setUserDetails(data));
  } catch (error: any) {
    yield showError({
      error,
      location: "getUserDetailsHandler",
      setter: setContentError,
      setterParams: {
        message: errorMessages.load,
      },
    });
  }
}

export function* deleteUserHandler({ payload }: { payload: DeleteUserPropsT }) {
  try {
    yield call(deleteUserQuery, payload);
    yield put(setDeletedUser({ userId: payload.userId }));
  } catch (error: any) {
    yield showError({
      error,
      location: "deleteUserHandler",
      setter: setOperationError,
      setterParams: {
        message: errorMessages.operation,
      },
    });
  }
}
