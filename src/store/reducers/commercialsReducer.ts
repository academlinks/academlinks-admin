import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  StateT,
  CommercialTargetT,
  CreateCommercialPropsT,
  UpdateCommercialPropsT,
  GetCommercialsPropsT,
  GetCommercialPropsT,
  DeleteCommercialPropsT,
} from "../../interface/reducers/commercialReducer.types";

import { CommercialT } from "../../interface/db/commercial.types";

const initialState: StateT = {
  sideBarLoadingState: {
    loading: false,
    error: false,
    message: "",
  },

  contentLoadingState: {
    loading: false,
    error: false,
    message: "",
  },

  operationLoadingState: {
    loading: false,
    error: false,
    message: "",
  },

  commercials: [],

  commercial: null,

  commercialTarget: "active",

  getNewCommercialAlert: {
    getNew: false,
    id: "",
    isEmpty: false,
  },

  commercialCreatedSuccessfully: null,
};

const CommercialSlcie = createSlice({
  name: "commercials",
  initialState,
  reducers: {
    /////SECTION: Loading State And Error Handling /////

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

    resetOperationError(state) {
      state.operationLoadingState = {
        ...state.operationLoadingState,
        loading: false,
        error: false,
        message: "",
      };
    },

    setOperationSuccess(state) {
      state.operationLoadingState = {
        error: false,
        loading: false,
        message: "",
      };
    },

    setSideBarError(
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) {
      state.sideBarLoadingState = {
        ...state.sideBarLoadingState,
        loading: false,
        error: true,
        message,
      };
    },

    setContentError(
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) {
      state.contentLoadingState = {
        ...state.contentLoadingState,
        loading: false,
        error: true,
        message,
      };
    },

    //////SECTION: DB Query And Setters /////

    getCommercials(state, { payload }: PayloadAction<GetCommercialsPropsT>) {
      state.sideBarLoadingState = {
        loading: true,
        error: false,
        message: "",
      };
    },

    setCommercials(state, { payload }: PayloadAction<CommercialT[]>) {
      state.commercials = payload;
      state.sideBarLoadingState = {
        ...state.sideBarLoadingState,
        loading: false,
      };
    },

    getCommercial(state, { payload }: PayloadAction<GetCommercialPropsT>) {
      state.contentLoadingState = {
        loading: true,
        error: false,
        message: "",
      };
    },

    setCommercial(state, { payload }: PayloadAction<CommercialT>) {
      state.commercial = payload;

      if (state.getNewCommercialAlert.getNew)
        state.getNewCommercialAlert = {
          getNew: false,
          isEmpty: false,
          id: "",
        };

      state.contentLoadingState = {
        ...state.contentLoadingState,
        loading: false,
      };
    },

    createCommercial(
      state,
      { payload }: PayloadAction<CreateCommercialPropsT>
    ) {
      state.operationLoadingState = {
        ...state.operationLoadingState,
        loading: true,
      };
    },

    updateCommercial(
      state,
      { payload }: PayloadAction<UpdateCommercialPropsT>
    ) {
      state.operationLoadingState = {
        ...state.operationLoadingState,
        loading: true,
      };
    },

    setUpdatedCommercial(
      state,
      { payload: { commercialId } }: PayloadAction<{ commercialId: string }>
    ) {
      state.operationLoadingState = {
        ...state.operationLoadingState,
        loading: false,
      };

      state.getNewCommercialAlert = {
        getNew: true,
        isEmpty: false,
        id: commercialId,
      };
    },

    deleteCommercial(
      state,
      { payload }: PayloadAction<DeleteCommercialPropsT>
    ) {
      state.operationLoadingState = {
        ...state.operationLoadingState,
        loading: true,
      };
    },

    setDeletedCommercial(
      state,
      { payload: { commercialId } }: PayloadAction<DeleteCommercialPropsT>
    ) {
      const i = state.commercials.findIndex(
        (comerc) => comerc._id === commercialId
      );

      if (state.commercial?._id === commercialId) {
        if (state.commercials.length > 1 && i !== 0)
          state.getNewCommercialAlert = {
            getNew: true,
            id: state.commercials[i - 1]._id,
            isEmpty: false,
          };
        else if (state.commercials.length > 1 && i === 0)
          state.getNewCommercialAlert = {
            getNew: true,
            id: state.commercials[i + 1]._id,
            isEmpty: false,
          };
        else if (state.commercials.length === 1)
          state.getNewCommercialAlert = {
            getNew: false,
            id: "",
            isEmpty: true,
          };
      }

      state.commercials = state.commercials.filter(
        (comerc) => comerc._id !== commercialId
      );

      state.operationLoadingState = {
        ...state.operationLoadingState,
        loading: false,
      };
    },

    /////SECTION: Dom Manipulation And Reset Helpers /////

    setCommercialTargetKey(
      state,
      { payload }: PayloadAction<CommercialTargetT>
    ) {
      state.commercialTarget = payload;
    },

    resetCommercials(state) {
      state.commercials = [];
    },

    resetCommercial(state) {
      state.commercial = null;
    },

    setCommercialSuccessfullCreation(
      state,
      { payload }: PayloadAction<null | boolean>
    ) {
      state.commercialCreatedSuccessfully = payload;
    },
  },
});

export default CommercialSlcie.reducer;
export const {
  /////////////////////////////////////////////
  ///// Loading State And Error Handling /////
  ///////////////////////////////////////////
  setOperationError,
  resetOperationError,
  setOperationSuccess,
  setSideBarError,
  setContentError,
  //////////////////////////////////
  ////// DB Query And Setters /////
  ////////////////////////////////
  createCommercial,
  updateCommercial,
  setUpdatedCommercial,
  getCommercials,
  setCommercials,
  getCommercial,
  setCommercial,
  deleteCommercial,
  setDeletedCommercial,
  /////////////////////////////////////
  ///// Dom Manipulation And Reset Helpers /////
  ///////////////////////////////////
  setCommercialTargetKey,
  resetCommercial,
  resetCommercials,
  setCommercialSuccessfullCreation
} = CommercialSlcie.actions;
