import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  RegistrationLabelsT,
  RegistrationRequestDetailsT,
} from "../../interface/db/registration.types";

import { GetRegistrationRequestDetailsPropsT } from "../../interface/reducers/registrationReducer.types";

interface StateT {
  registrationLabels: RegistrationLabelsT[];
  requestDetails?: RegistrationRequestDetailsT;
}

const initialState: StateT = {
  registrationLabels: [],
  requestDetails: {
    _id: "",
    aproved: false,
    firstName: "",
    lastName: "",
    userName: "",
    gender: "",
    birthDate: "",
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
    workplace: {
      _id: "",
      company: "",
      description: "",
      position: "",
      workingYears: {
        from: "",
        to: "",
      },
    },
  },
};

const RegistrationSlice = createSlice({
  name: "registration",
  initialState,
  reducers: {
    getRegistrationLabels(state) {},

    setRegistrationLabels(
      state,
      { payload }: PayloadAction<RegistrationLabelsT[]>
    ) {
      state.registrationLabels = payload;
    },

    getRegistrationRequesDetails(
      _,
      { payload }: PayloadAction<GetRegistrationRequestDetailsPropsT>
    ) {},

    setRegistrationRequestDetails(
      state,
      { payload }: PayloadAction<RegistrationRequestDetailsT>
    ) {
      state.requestDetails = payload;
    },
  },
});

export default RegistrationSlice.reducer;
export const {
  getRegistrationLabels,
  setRegistrationLabels,
  getRegistrationRequesDetails,
  setRegistrationRequestDetails,
} = RegistrationSlice.actions;
