import { combineReducers } from "@reduxjs/toolkit";
import registrationReducer from "./registrationReducer";
import authenticationReducer from "./authenticationReducer";
import userReducer from "./userReducer";

const root = combineReducers({
  registration: registrationReducer,
  admin: authenticationReducer,
  users: userReducer,
});

export default root;
