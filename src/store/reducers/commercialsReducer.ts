import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  StateT,
  CommercialTargetT,
  CreateCommercialPropsT,
  GetCommercialsPropsT,
} from "../../interface/reducers/commercialReducer.types";

const initialState: StateT = {
  loadingState: {
    loading: false,
    error: false,
    message: "",
  },

  operationLoadingState: {
    loading: false,
    error: false,
    message: "",
  },

  commercialTarget: "all",
};

const CommercialSlcie = createSlice({
  name: "commercials",
  initialState,
  reducers: {
    setCommercialTargetKey(
      state,
      { payload }: PayloadAction<CommercialTargetT>
    ) {
      state.commercialTarget = payload;
    },

    // db
    setOperationError(
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) {
      state.operationLoadingState = {
        ...state.operationLoadingState,
        loading: false,
        error: true,
        message,
      };
    },

    setOperationSuccess(state) {
      state.operationLoadingState = {
        ...state.operationLoadingState,
        loading: false,
      };
    },

    getCommercials(
      state,
      { payload }: PayloadAction<GetCommercialsPropsT>
    ) {},

    createCommercial(
      state,
      { payload }: PayloadAction<CreateCommercialPropsT>
    ) {
      state.operationLoadingState = {
        ...state.operationLoadingState,
        loading: true,
      };
    },
  },
});

export default CommercialSlcie.reducer;
export const {
  setCommercialTargetKey,
  setOperationError,
  setOperationSuccess,
  createCommercial,
  getCommercials,
} = CommercialSlcie.actions;
