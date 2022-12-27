import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  GetUserLabelPropsT,
  GetUserDetailsPropsT,
  FilterT,
  FilterLivingPlaceT,
  FilterBirthDate,
  FilterGenderT,
  FilterRegistrationT,
  FilterSortT,
} from "../../interface/reducers/usersReducer.types";
import { UserDetailsT, UserLabelT } from "../../interface/db/users.types";

interface LoadingStateT {
  loading: boolean;
  error: boolean;
  message: string | undefined;
}

interface StateT {
  labelsLoadingState: LoadingStateT;
  contentLoadingState: LoadingStateT;
  users: UserLabelT[];
  userDetails: UserDetailsT;
  filter: FilterT;
}

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

const initialState: StateT = {
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
  users: [],
  userDetails: {
    _id: "",
    userName: "",
    email: "",
    profileImg: "",
    birthDate: "",
    gender: "",
    createdAt: "",
    from: {
      _id: "",
      city: "",
      country: "",
    },
    currentLivingPlace: {
      _id: "",
      city: "",
      country: "",
    },
    education: [],
    workplace: [],
  },
  filter: {
    gender: "default",
    sort: "default",
    livingPlace: {
      from: {
        country: "",
        city: "",
      },
      current: {
        country: "",
        city: "",
      },
      target: "from",
      nest: "country",
    },
    birthDate: {
      from: "",
      to: "",
      target: "from",
    },
    registration: {
      from: "",
      to: "",
      target: "from",
    },
  },
};

const usersSlice = createSlice({
  name: "users",
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

    getUserLabels(state, { payload }: PayloadAction<GetUserLabelPropsT>) {
      updateLabelsLoadingState({ state });
    },

    setUserLabels(state, { payload }: PayloadAction<UserLabelT[]>) {
      state.users = payload;
      updateLabelsLoadingState({ state, loading: false });
    },

    getUserDetails(state, { payload }: PayloadAction<GetUserDetailsPropsT>) {
      updateContentLoadingState({ state });
    },

    setUserDetails(state, { payload }: PayloadAction<UserDetailsT>) {
      state.userDetails = payload;
      updateContentLoadingState({ state, loading: false });
    },

    // filter
    setFilterByLivingPlace(
      state,
      { payload }: PayloadAction<FilterLivingPlaceT>
    ) {
      const { target, nest } = payload;

      state.filter.livingPlace = {
        ...state.filter.livingPlace,
        [target]: {
          ...state.filter.livingPlace?.[target],
          [nest]: payload[target]?.[nest],
        },
        target: payload.target,
        nest: payload.nest,
      };
    },

    setFilterByRegistration(
      state,
      { payload }: PayloadAction<FilterRegistrationT>
    ) {
      const { target } = payload;

      state.filter.registration = {
        ...state.filter.registration,
        [target]: payload[target],
        target: payload.target,
      };
    },

    setFilterByBirthdate(state, { payload }: PayloadAction<FilterBirthDate>) {
      const { target } = payload;

      state.filter.birthDate = {
        ...state.filter.birthDate,
        [target]: payload[target],
        target: payload.target,
      };
    },

    setFilterByGender(state, { payload }: PayloadAction<FilterGenderT>) {
      state.filter.gender = payload;
    },

    setSort(state, { payload }: PayloadAction<FilterSortT>) {
      state.filter.sort = payload;
    },
  },
});

export default usersSlice.reducer;
export const {
  setLabelError,
  setContentError,
  getUserLabels,
  setUserLabels,
  getUserDetails,
  setUserDetails,
  // filter
  setFilterByLivingPlace,
  setFilterByRegistration,
  setFilterByBirthdate,
  setFilterByGender,
  setSort,
} = usersSlice.actions;
