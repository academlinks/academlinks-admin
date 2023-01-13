import { combineReducers } from "@reduxjs/toolkit";
import registrationReducer from "./registrationReducer";
import authenticationReducer from "./authenticationReducer";
import userReducer from "./userReducer";
import commercialsReducer from "./commercialsReducer";
import statisticReducer from "./statisticReducer";
import notificationReducer from "./notificationReducer";

const root = combineReducers({
  registration: registrationReducer,
  admin: authenticationReducer,
  users: userReducer,
  commercials: commercialsReducer,
  statistics: statisticReducer,
  notifications: notificationReducer,
});

export default root;
