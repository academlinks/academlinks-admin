import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthCredentialsT } from "../../interface/reducers/authReducer.types";

interface StateT {
  isAuthenticated: boolean;
  adminId: string;
}

const initialState: StateT = {
  isAuthenticated: false,
  adminId: "",
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    login(_, { payload }: PayloadAction<AuthCredentialsT>) {},

    setAdmin(
      state,
      {
        payload: { accessToken, adminId },
      }: PayloadAction<{ accessToken: string; adminId: string }>
    ) {
      localStorage.setItem(
        "academind_admin_passport",
        JSON.stringify(accessToken)
      );

      state.isAuthenticated = true;
      state.adminId = adminId;
    },

    logOut(state) {
      localStorage.removeItem("academind_admin_passport");
      state.isAuthenticated = false;
      state.adminId = "";
    },

    getAppBadges() {},
  },
});

export default adminSlice.reducer;
export const { login, setAdmin, logOut, getAppBadges } = adminSlice.actions;
