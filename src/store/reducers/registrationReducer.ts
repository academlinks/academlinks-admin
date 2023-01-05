import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  RegistrationLabelsT,
  RegistrationRequestDetailsT,
} from "../../interface/db/registration.types";

import {
  GetRegistrationRequestDetailsPropsT,
  RequestMutationPropsT,
  FilterKeyT,
} from "../../interface/reducers/registrationReducer.types";

interface LoadingStateT {
  loading: boolean;
  error: boolean;
  message: string | undefined;
}

interface StateT {
  registrationLabels: RegistrationLabelsT[];
  requestDetails?: RegistrationRequestDetailsT;
  labelsLoadingState: LoadingStateT;
  contentLoadingState: LoadingStateT;
  redirectAlert: {
    redirect: boolean;
    path: "empty" | string;
  };
  filterKey: FilterKeyT;
}

const initialState: StateT = {
  registrationLabels: [],
  labelsLoadingState: {
    loading: false,
    error: false,
    message: "",
  },
  contentLoadingState: {
    loading: false,
    error: false,
    message: "",
  },
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

function updateLabelsLoadingState({
  state,
  loading = true,
  error = false,
  message,
}: {
  state: StateT;
  loading?: boolean;
  error?: boolean;
  message?: string;
}) {
  state.labelsLoadingState.loading = loading;
  state.labelsLoadingState.error = error ? true : false;
  state.labelsLoadingState.message = error ? message : "";
}

function updateContentLoadingState({
  state,
  loading = true,
  error = false,
  message,
}: {
  state: StateT;
  loading?: boolean;
  error?: boolean;
  message?: string;
}) {
  state.contentLoadingState.loading = loading;
  state.contentLoadingState.error = error ? true : false;
  state.contentLoadingState.message = error ? message : "";
}

const RegistrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    setLabelError(
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) {
      updateLabelsLoadingState({ state, loading: false, error: true, message });
    },

    setContentError(
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) {
      updateContentLoadingState({
        state,
        loading: false,
        error: true,
        message,
      });
    },

    setFilterKey(state, { payload }: PayloadAction<FilterKeyT>) {
      state.filterKey = payload;
    },

    getRegistrationLabels(state, { payload }: PayloadAction<FilterKeyT>) {
      updateLabelsLoadingState({ state });
    },

    setRegistrationLabels(
      state,
      { payload }: PayloadAction<RegistrationLabelsT[]>
    ) {
      state.registrationLabels = payload;

      updateLabelsLoadingState({ state, loading: false });
    },

    getRegistrationRequesDetails(
      state,
      { payload }: PayloadAction<GetRegistrationRequestDetailsPropsT>
    ) {
      updateContentLoadingState({ state });
    },

    setRegistrationRequestDetails(
      state,
      { payload }: PayloadAction<RegistrationRequestDetailsT>
    ) {
      state.requestDetails = payload;

      updateContentLoadingState({ state, loading: false });
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

      updateContentLoadingState({ state, loading: false });
    },

    resetRedirectAlert(state) {
      state.redirectAlert = {
        redirect: false,
        path: "",
      };
    },

    aproveRequest(state, { payload }: PayloadAction<RequestMutationPropsT>) {
      updateContentLoadingState({ state });
    },

    deleteRequest(state, { payload }: PayloadAction<RequestMutationPropsT>) {
      updateContentLoadingState({ state });
    },
  },
});

export default RegistrationSlice.reducer;
export const {
  setLabelError,
  setContentError,
  setFilterKey,
  getRegistrationLabels,
  setRegistrationLabels,
  getRegistrationRequesDetails,
  setRegistrationRequestDetails,
  removeRequest,
  resetRedirectAlert,
  deleteRequest,
  aproveRequest,
} = RegistrationSlice.actions;
