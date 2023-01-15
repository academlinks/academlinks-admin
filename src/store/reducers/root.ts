import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import registrationReducer from "./registrationReducer";
import adminReducer from "./adminReducer";
import userReducer from "./userReducer";
import commercialsReducer from "./commercialsReducer";
import statisticReducer from "./statisticReducer";
import notificationReducer from "./notificationReducer";

const persistedAdminReducerConfig = {
  key: "admin",
  storage,
};

const persistedAdminReducer = persistReducer(
  persistedAdminReducerConfig,
  adminReducer
);

const root = combineReducers({
  registration: registrationReducer,
  admin: persistedAdminReducer,
  users: userReducer,
  commercials: commercialsReducer,
  statistics: statisticReducer,
  notifications: notificationReducer,
});

export default root;
