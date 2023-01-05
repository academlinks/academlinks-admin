import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  GetUserLabelPropsT,
  GetUserDetailsPropsT,
  DeleteUserPropsT,
  FilterT,
  LocaleFilterT,
  FilterLivingPlaceT,
  FilterBirthDateT,
  FilterGenderT,
  FilterRegistrationT,
  FilterSortT,
  FilterPositionT,
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
  triggerGetNewUserDetails: {
    getNew: boolean;
    id: string;
    isEmpty: boolean;
  };
  userDetails: UserDetailsT;
  filter: FilterT;
  localeFilter: LocaleFilterT;
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

  triggerGetNewUserDetails: {
    getNew: false,
    id: "",
    isEmpty: false,
  },
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

  filter: {},
  localeFilter: {},
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

      if (state.triggerGetNewUserDetails.getNew)
        state.triggerGetNewUserDetails = {
          getNew: false,
          id: "",
          isEmpty: false,
        };
    },

    deleteUser(_, { payload }: PayloadAction<DeleteUserPropsT>) {},

    setDeletedUser(
      state,
      { payload: { userId } }: PayloadAction<DeleteUserPropsT>
    ) {
      const i = state.users.findIndex((user) => user._id === userId);

      if (state.userDetails._id === userId) {
        if (state.users.length > 1 && i !== 0)
          state.triggerGetNewUserDetails = {
            getNew: true,
            id: state.users[i - 1]._id,
            isEmpty: false,
          };
        else if (state.users.length > 1 && i === 0)
          state.triggerGetNewUserDetails = {
            getNew: true,
            id: state.users[i + 1]._id,
            isEmpty: false,
          };
        else if (state.users.length === 1)
          state.triggerGetNewUserDetails = {
            getNew: false,
            id: "",
            isEmpty: true,
          };
      }

      state.users = state.users.filter((user) => user._id !== userId);
    },

    /////////////////////////////
    ////////// filter //////////
    ///////////////////////////
    resetFilter(state) {
      state.filter = {};
    },

    setFilterByUserName(state, { payload }: PayloadAction<string>) {
      state.filter.userName = payload;
    },

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

    setFilterByBirthdate(state, { payload }: PayloadAction<FilterBirthDateT>) {
      const { target } = payload;

      state.filter.birthDate = {
        ...state.filter.birthDate,
        [target]: payload[target],
        target: payload.target,
      };
    },

    setFilterPosition(state, { payload }: PayloadAction<FilterPositionT>) {
      if (state.filter.position === payload) state.filter.position = "default";
      else state.filter.position = payload;
    },

    resetLocaleFilter(state) {
      state.localeFilter = {};
    },

    setFilterByGender(state, { payload }: PayloadAction<FilterGenderT>) {
      if (state.localeFilter.gender === payload)
        state.localeFilter.gender = "default";
      else state.localeFilter.gender = payload;
    },

    setSort(state, { payload }: PayloadAction<FilterSortT>) {
      if (state.localeFilter.sort === payload)
        state.localeFilter.sort = "default";
      else state.localeFilter.sort = payload;
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
  deleteUser,
  setDeletedUser,
  // filter
  resetFilter,
  resetLocaleFilter,
  setFilterByUserName,
  setFilterByLivingPlace,
  setFilterByRegistration,
  setFilterByBirthdate,
  setFilterPosition,
  setFilterByGender,
  setSort,
} = usersSlice.actions;
