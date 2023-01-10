import { combineReducers } from "@reduxjs/toolkit";
import registrationReducer from "./registrationReducer";
import authenticationReducer from "./authenticationReducer";
import userReducer from "./userReducer";
import commercialsReducer from "./commercialsReducer";
import statisticReducer from "./statisticReducer";

const root = combineReducers({
  registration: registrationReducer,
  admin: authenticationReducer,
  users: userReducer,
  commercials: commercialsReducer,
  statistics: statisticReducer,
});

export default root;
