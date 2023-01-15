import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  StateT,
  GetUserLabelPropsT,
  GetUserDetailsPropsT,
  DeleteUserPropsT,
  FilterLivingPlaceT,
  FilterBirthDateT,
  FilterGenderT,
  FilterRegistrationT,
  FilterSortT,
  FilterPositionT,
} from "../../interface/reducers/usersReducer.types";
import { UserDetailsT, UserLabelT } from "../../interface/db/users.types";

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
    currentWorkplace: {
      description: "",
      institution: "",
      position: "",
    },
  },

  users: [],

  filter: {},
  localeFilter: {},

  triggerGetNewUserDetails: {
    getNew: false,
    id: "",
    isEmpty: false,
  },
};

const usersSlice = createSlice({
  name: "users",
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

    getUserLabels(state, { payload }: PayloadAction<GetUserLabelPropsT>) {
      updateLoadingState({ state, key: "sideBarLoadingState" });
    },

    setUserLabels(state, { payload }: PayloadAction<UserLabelT[]>) {
      state.users = payload;
      updateLoadingState({ state, key: "sideBarLoadingState", loading: false });
    },

    getUserDetails(state, { payload }: PayloadAction<GetUserDetailsPropsT>) {
      updateLoadingState({ state, key: "contentLoadingState" });
    },

    setUserDetails(state, { payload }: PayloadAction<UserDetailsT>) {
      state.userDetails = payload;

      updateLoadingState({ state, key: "contentLoadingState", loading: false });

      if (state.triggerGetNewUserDetails.getNew)
        state.triggerGetNewUserDetails = {
          getNew: false,
          id: "",
          isEmpty: false,
        };
    },

    deleteUser(state, { payload }: PayloadAction<DeleteUserPropsT>) {
      updateLoadingState({ state, key: "operationLoadingState" });
    },

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

      updateLoadingState({
        state,
        key: "operationLoadingState",
        loading: false,
      });
    },

    ///// SECTION: filter /////

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
  // Error Handling
  setSideBarError,
  setContentError,
  setOperationError,
  resetOperationError,
  // DB Query And Setters
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
