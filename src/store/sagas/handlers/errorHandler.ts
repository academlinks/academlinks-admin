import { put } from "redux-saga/effects";
import { ActionCreatorWithPayload } from "@reduxjs/toolkit";

class AppError extends Error {
  response;

  constructor() {
    super();
    this.response = {
      data: {
        message: "",
      },
    };
    Object.setPrototypeOf(this, AppError.prototype);
  }
}

type ErrorT = AppError;
interface AppErrorT {
  error: ErrorT;
  location: string;
  setter: ActionCreatorWithPayload<any>;
  setterParams?: any;
}

export function* showError({
  error,
  location,
  setter,
  setterParams,
}: AppErrorT) {
  if (setter)
    yield put(
      setter({
        ...setterParams,
        message: error.response.data.message || setterParams.message,
      })
    );

  if (process.env.REACT_APP_ENV_MODE !== "DEV") return;

  console.log({
    error: true,
    location: `sagaHandler - ${location}`,
    message: error.response.data.message || error.message,
    err: error,
    stack: error.stack,
  });
}

export function triggerError() {
  throw new Error("manually trigered error");
}

const messages = () => {
  const load = "Occured error during loading data. Please try again later.";
  const operation = "Occured error during operation. Please try again later.";

  return {
    load,
    operation,
  };
};

export const errorMessages = messages();
