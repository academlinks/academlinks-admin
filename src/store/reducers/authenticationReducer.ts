import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { AuthCredentialsT } from "../../interface/reducers/authReducer.types";

const initialState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    login(_, { payload }: PayloadAction<AuthCredentialsT>) {},

    setAdmin(
      state,
      { payload: { accessToken } }: PayloadAction<{ accessToken: string }>
    ) {
      localStorage.setItem(
        "academind_admin_passport",
        JSON.stringify(accessToken)
      );

      state.isAuthenticated = true;
    },

    logOut(state) {
      localStorage.removeItem("academind_admin_passport");
      state.isAuthenticated = false;
    },
  },
});

export default authSlice.reducer;
export const { login, setAdmin, logOut } = authSlice.actions;
