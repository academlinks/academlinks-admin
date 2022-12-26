import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthCredentialsT } from "../../interface/reducers/authReducer.types";

const initialState = {};

const authSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    login(_, { payload }: PayloadAction<AuthCredentialsT>) {},

    setAdmin(
      _,
      { payload: { accessToken } }: PayloadAction<{ accessToken: string }>
    ) {
      localStorage.setItem(
        "academind_admin_passport",
        JSON.stringify(accessToken)
      );
    },

    logOut() {
      localStorage.removeItem("academind_admin_passport");
    },
  },
});

export default authSlice.reducer;
export const { login, setAdmin, logOut } = authSlice.actions;
