import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  StateT,
  SetRangeByRegDateT,
} from "../../interface/reducers/statistcsReducers.types";
import { UserForStatisticT } from "../../interface/db/statistic.types";

const initialState: StateT = {
  loadingState: {
    loading: false,
    error: false,
    message: "",
  },

  users: [],

  ageRange: { range: [], total: NaN },

  gender: { range: [], total: NaN, male: NaN, female: NaN },

  regDates: { range: [], total: NaN },

  byPosition: {
    range: [],
    total: NaN,
    professorsCount: NaN,
    associateProfessorsCount: NaN,
    assistantProfessorsCount: NaN,
    researcherCount: NaN,
    administrativPersonalCount: NaN,
    phdStudentCount: NaN,
    postDocFellowCount: NaN,
  },

  byCurrentCountry: {
    labels: [],
    range: [],
    countriesTotal: NaN,
    total: NaN,
  },

  byHomeLand: {
    labels: [],
    range: [],
    countriesTotal: NaN,
    total: NaN,
  },

  byInstitution: {
    labels: [],
    range: [],
    institutionsTotal: NaN,
    total: NaN,
  },
};

const statisticSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    setLoadingStateError(
      state,
      { payload: { message } }: PayloadAction<{ message: string }>
    ) {
      state.loadingState = {
        loading: false,
        error: true,
        message,
      };
    },

    getUsersForStatistic(state) {
      state.loadingState = {
        loading: true,
        error: false,
        message: "",
      };
    },

    setUsersForStatistic(
      state,
      { payload }: PayloadAction<UserForStatisticT[]>
    ) {
      state.users = payload;

      state.loadingState = {
        loading: false,
        error: false,
        message: "",
      };
    },

    setUserRangeByRegDate(
      state,
      { payload: { regYear } }: PayloadAction<SetRangeByRegDateT>
    ) {
      const year = regYear;

      const months = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
      const usersRegisteredInSelectedRange = state.users.filter(
        (user) => new Date(user.createdAt).getFullYear() === year
      );

      const range = months
        .map((m) => {
          return usersRegisteredInSelectedRange.filter(
            (user) => new Date(user.createdAt).getMonth() === m
          );
        })
        .map((range) => range.length);

      state.regDates = {
        range: range,
        total: usersRegisteredInSelectedRange.length,
      };
    },

    setUsersAgeRange(state) {
      const userAges: number[] = state.users
        .map((user) => (user.age ? user.age : NaN))
        .filter((age) => age && typeof age === "number");

      let users_18_25 = 0;
      let users_25_35 = 0;
      let users_35_50 = 0;
      let users_50_75 = 0;
      let users_75_100 = 0;

      userAges.forEach((age) => {
        if (age > 18 && age <= 25) users_18_25 += 1;
        else if (age > 25 && age <= 35) users_25_35 += 1;
        else if (age > 35 && age <= 50) users_35_50 += 1;
        else if (age > 50 && age <= 75) users_50_75 += 1;
        else if (age > 75 && age <= 100) users_75_100 += 1;
      });

      state.ageRange = {
        range: [
          users_18_25,
          users_25_35,
          users_35_50,
          users_50_75,
          users_75_100,
        ],
        total: state.users.length,
      };
    },

    setUsersRangeByGender(state) {
      const femaleUsersCount = state.users.reduce(
        (acc, user) => (user.gender === "female" ? (acc += 1) : (acc += 0)),
        0
      );

      const maleUsersCount = state.users.reduce(
        (acc, user) => (user.gender === "male" ? (acc += 1) : (acc += 0)),
        0
      );

      const usersByGender = [femaleUsersCount, maleUsersCount];

      state.gender = {
        range: usersByGender,
        total: state.users.length,
        male: maleUsersCount,
        female: femaleUsersCount,
      };
    },

    setUsersRangeByPosition(state) {
      // const row = [
      //   "professor",
      //   "associate professor",
      //   "assistant professor",
      //   "researcher",
      //   "administrative personnel",
      //   "phd student",
      //   "post-doc-fellow",
      // ];

      let professorsCount = 0;
      let associateProfessorsCount = 0;
      let assistantProfessorsCount = 0;
      let researcherCount = 0;
      let administrativPersonalCount = 0;
      let phdStudentCount = 0;
      let postDocFellowCount = 0;

      state.users.forEach((user) => {
        if (user.currentWorkplace.position === "professor")
          professorsCount += 1;
        else if (user.currentWorkplace.position === "associate professor")
          associateProfessorsCount += 1;
        else if (user.currentWorkplace.position === "assistant professor")
          assistantProfessorsCount += 1;
        else if (user.currentWorkplace.position === "researcher")
          researcherCount += 1;
        else if (user.currentWorkplace.position === "administrative personnel")
          administrativPersonalCount += 1;
        else if (user.currentWorkplace.position === "phd student")
          phdStudentCount += 1;
        else if (user.currentWorkplace.position === "post-doc-fellow")
          postDocFellowCount += 1;
      });

      const usersByPos = [
        professorsCount,
        associateProfessorsCount,
        assistantProfessorsCount,
        researcherCount,
        administrativPersonalCount,
        phdStudentCount,
        postDocFellowCount,
      ];

      state.byPosition = {
        range: usersByPos,
        total: state.users.length,
        professorsCount,
        associateProfessorsCount,
        assistantProfessorsCount,
        researcherCount,
        administrativPersonalCount,
        phdStudentCount,
        postDocFellowCount,
      };
    },

    setRangeByCurrCountry(state) {
      const countries = Array.from(
        new Set(state.users.map((user) => user.currentLivingPlace.country))
      );

      const usersInCountry = countries.map((country) => {
        return state.users.filter(
          (user) => user.currentLivingPlace.country === country
        ).length;
      });

      state.byCurrentCountry = {
        labels: countries,
        range: usersInCountry,
        countriesTotal: countries.length,
        total: state.users.length,
      };
    },

    setRangeByHomeLand(state) {
      const countries = Array.from(
        new Set(state.users.map((user) => user.from.country))
      );

      const usersInCountry = countries.map((country) => {
        return state.users.filter((user) => user.from.country === country)
          .length;
      });

      state.byHomeLand = {
        labels: countries,
        range: usersInCountry,
        countriesTotal: countries.length,
        total: state.users.length,
      };
    },

    setRangeByInstitution(state) {
      const labels = Array.from(
        new Set(state.users.map((user) => user.currentWorkplace.institution))
      );

      const range = labels.map((label) => {
        return state.users.filter(
          (user) => user.currentWorkplace.institution === label
        ).length;
      });

      state.byInstitution = {
        labels,
        range,
        institutionsTotal: labels.length,
        total: state.users.length,
      };
    },
  },
});

export default statisticSlice.reducer;
export const {
  setLoadingStateError,
  getUsersForStatistic,
  setUsersForStatistic,
  // range setters
  setUserRangeByRegDate,
  setUsersAgeRange,
  setUsersRangeByGender,
  setUsersRangeByPosition,
  setRangeByCurrCountry,
  setRangeByHomeLand,
  setRangeByInstitution,
} = statisticSlice.actions;
