import { combineReducers } from "@reduxjs/toolkit";
import registrationReducer from "./registrationReducer";
import authenticationReducer from "./authenticationReducer";

const root = combineReducers({
  registration: registrationReducer,
  admin: authenticationReducer,
});

export default root;
