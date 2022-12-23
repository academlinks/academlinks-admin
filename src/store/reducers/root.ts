import { combineReducers } from "@reduxjs/toolkit";
import registrationReducer from "./registrationReducer";

const root = combineReducers({
  registration: registrationReducer,
});

export default root;
