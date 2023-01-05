import { call, put } from "redux-saga/effects";
import { showError, errorMessages } from "./errorHandler";

import {
  setLabelError,
  setContentError,
  setUserLabels,
  setUserDetails,
  setDeletedUser,
} from "../../reducers/userReducer";

import { getUserLabelsQuery, getUserDetailsQuery } from "../api/usersQueries";

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
    showError({
      error,
      location: "getUserLabelsHandler",
      setter: setLabelError,
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
    showError({
      error,
      location: "getUserDetailsHandler",
      setter: setContentError,
      setterParams: {
        message: errorMessages.load,
      },
    });
  }
}

export function* deleteUserHandler({
  payload: { userId },
}: {
  payload: DeleteUserPropsT;
}) {
  try {
    yield put(setDeletedUser({ userId }));
  } catch (error: any) {
    showError({
      error,
      location: "getUserDetailsHandler",
      setter: setContentError,
      setterParams: {
        message: errorMessages.load,
      },
    });
  }
}
