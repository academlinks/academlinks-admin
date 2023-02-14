import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  RegistrationLabelsT,
  RegistrationRequestDetailsT,
} from "../../interface/db/registration.types";

import {
  StateT,
  GetRegistrationRequestDetailsPropsT,
  RequestMutationPropsT,
  FilterKeyT,
  SetNewRegRequestCountT,
} from "../../interface/reducers/registrationReducer.types";

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

  registrationCounts: 0,

  registrationLabels: [],

  requestDetails: {
    _id: "",
    aproved: false,
    firstName: "",
    lastName: "",
    userName: "",
    gender: "",
    email: "",
    currentLivingPlace: {
      _id: "",
      city: "",
      country: "",
    },
    from: {
      _id: "",
      city: "",
      country: "",
    },
    registrationBio: {
      _id: "",
      position: "",
      description: "",
      institution: "",
    },
  },

  redirectAlert: {
    redirect: false,
    path: "",
  },

  filterKey: "new",
};

const RegistrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    ///// SECTION: Loading State And Error Handling /////

    setSideBarError(
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) {
      updateLoadingState({
        state,
        key: "sideBarLoadingState",
        loading: false,
        error: true,
        message,
      });
    },

    setContentError(
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) {
      updateLoadingState({
        state,
        key: "contentLoadingState",
        loading: false,
        error: true,
        message,
      });
    },

    setOperationError(
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) {
      updateLoadingState({
        state,
        key: "operationLoadingState",
        loading: false,
        error: true,
        message,
      });
    },

    resetOperationError(state) {
      updateLoadingState({
        state,
        key: "operationLoadingState",
        loading: false,
        error: false,
        message: "",
      });
    },

    ////// SECTION: DB Query And Setters /////

    getRegistrationLabels(state, { payload }: PayloadAction<FilterKeyT>) {
      updateLoadingState({ state, key: "sideBarLoadingState" });
    },

    setRegistrationLabels(
      state,
      { payload }: PayloadAction<RegistrationLabelsT[]>
    ) {
      state.registrationLabels = payload;

      updateLoadingState({ state, key: "sideBarLoadingState", loading: false });
    },

    getRegistrationRequesDetails(
      state,
      { payload }: PayloadAction<GetRegistrationRequestDetailsPropsT>
    ) {
      updateLoadingState({ state, key: "contentLoadingState" });
    },

    setRegistrationRequestDetails(
      state,
      { payload }: PayloadAction<RegistrationRequestDetailsT>
    ) {
      state.requestDetails = payload;

      updateLoadingState({ state, key: "contentLoadingState", loading: false });
    },

    removeRequest(
      state,
      { payload: { registrationId } }: PayloadAction<{ registrationId: string }>
    ) {
      const i = state.registrationLabels.findIndex(
        (reg) => reg._id === registrationId
      );

      const labelsSize = state.registrationLabels.length;

      if (state.requestDetails?._id === registrationId) {
        if (labelsSize > 1 && i !== 0)
          state.redirectAlert = {
            redirect: true,
            path: state.registrationLabels[i - 1]._id,
          };
        else if (labelsSize > 1 && i === 0)
          state.redirectAlert = {
            redirect: true,
            path: state.registrationLabels[1]._id,
          };
        else
          state.redirectAlert = {
            redirect: true,
            path: "empty",
          };
      }

      state.registrationLabels = [...state.registrationLabels].filter(
        (reg) => reg._id !== registrationId
      );

      if (state.registrationCounts > 0)
        state.registrationCounts = state.registrationCounts - 1;

      updateLoadingState({
        state,
        key: "operationLoadingState",
        loading: false,
      });
    },

    aproveRequest(state, { payload }: PayloadAction<RequestMutationPropsT>) {
      updateLoadingState({ state, key: "operationLoadingState" });
    },

    deleteRequest(state, { payload }: PayloadAction<RequestMutationPropsT>) {
      updateLoadingState({ state, key: "operationLoadingState" });
    },

    setUnseenRegRequestsQount(
      state,
      { payload }: PayloadAction<SetNewRegRequestCountT>
    ) {
      state.registrationCounts = payload;
    },

    setNewRegRequest(state, { payload }: PayloadAction<RegistrationLabelsT>) {
      state.registrationLabels = [payload, ...state.registrationLabels];
      state.registrationCounts = state.registrationCounts += 1;
    },

    encreaseUnseenRegRequestsCount(state) {
      state.registrationCounts = state.registrationCounts += 1;
    },

    ///// SECTION: Dom Manipulation And Trigerer Helpers /////

    setFilterKey(state, { payload }: PayloadAction<FilterKeyT>) {
      state.filterKey = payload;
    },

    resetRedirectAlert(state) {
      state.redirectAlert = {
        redirect: false,
        path: "",
      };
    },
  },
});

export default RegistrationSlice.reducer;
export const {
  setSideBarError,
  setContentError,
  setOperationError,
  resetOperationError,
  setFilterKey,
  getRegistrationLabels,
  setRegistrationLabels,
  getRegistrationRequesDetails,
  setRegistrationRequestDetails,
  removeRequest,
  resetRedirectAlert,
  deleteRequest,
  setUnseenRegRequestsQount,
  setNewRegRequest,
  encreaseUnseenRegRequestsCount,
  aproveRequest,
} = RegistrationSlice.actions;

type KeyT =
  | "sideBarLoadingState"
  | "contentLoadingState"
  | "operationLoadingState";

interface UpdaterT {
  state: StateT;
  key: KeyT;
  loading?: boolean;
  error?: boolean;
  message?: string;
}

function updateLoadingState({
  state,
  key,
  loading = true,
  error = false,
  message = "",
}: UpdaterT) {
  state[key].loading = loading;
  state[key].error = error ? true : false;
  state[key].message = error ? message : "";
}
