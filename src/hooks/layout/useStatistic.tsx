import { useAppDispatch } from "../../store/hooks";

import {
  setUserRangeByRegDate,
  setUsersAgeRange,
  setUsersRangeByGender,
  setUsersRangeByPosition,
  setRangeByCurrCountry,
  setRangeByHomeLand,
} from "../../store/reducers/statisticReducer";

import { SetRangeByRegDateT } from "../../interface/reducers/statistcsReducers.types";

export default function useStatistic() {
  const dispatch = useAppDispatch();

  function setAgeRange() {
    dispatch(setUsersAgeRange());
  }

  function setRegDateRange(param: SetRangeByRegDateT) {
    dispatch(setUserRangeByRegDate(param));
  }

  function setGenderRange() {
    dispatch(setUsersRangeByGender());
  }

  function setPositionRange() {
    dispatch(setUsersRangeByPosition());
  }

  function setCurrCountryRange() {
    dispatch(setRangeByCurrCountry());
  }

  function setHomelandRange() {
    dispatch(setRangeByHomeLand());
  }

  return {
    setAgeRange,
    setRegDateRange,
    setGenderRange,
    setPositionRange,
    setCurrCountryRange,
    setHomelandRange,
  };
}
