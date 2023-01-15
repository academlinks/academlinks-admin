import { useAppDispatch } from "../../store/hooks";

import {
  resetFilter,
  resetLocaleFilter,
  setFilterByUserName,
  setFilterByLivingPlace,
  setFilterByRegistration,
  setFilterByBirthdate,
  setFilterPosition,
  setFilterByGender,
  setSort,
} from "../../store/reducers/userReducer";

import {
  FilterLivingPlaceT,
  FilterRegistrationT,
  FilterBirthDateT,
  FilterGenderT,
  FilterSortT,
  FilterPositionT,
} from "../../interface/reducers/usersReducer.types";

export default function useUserFilter() {
  const dispatch = useAppDispatch();

  function handleResetFilter() {
    dispatch(resetFilter());
  }

  function handleResetLocaleFilter() {
    dispatch(resetLocaleFilter());
  }

  function filterByUserName(params: string) {
    dispatch(setFilterByUserName(params));
  }

  function filterByLivingPlace(params: FilterLivingPlaceT) {
    dispatch(setFilterByLivingPlace(params));
  }

  function filterByRegistrationDate(params: FilterRegistrationT) {
    dispatch(setFilterByRegistration(params));
  }

  function filterByBirthDate(params: FilterBirthDateT) {
    dispatch(setFilterByBirthdate(params));
  }

  function filterByPosition(params: FilterPositionT) {
    dispatch(setFilterPosition(params));
  }

  function filterByGender(params: FilterGenderT) {
    dispatch(setFilterByGender(params));
  }

  function sortUser(params: FilterSortT) {
    dispatch(setSort(params));
  }

  return {
    handleResetFilter,
    handleResetLocaleFilter,
    filterByUserName,
    filterByLivingPlace,
    filterByRegistrationDate,
    filterByBirthDate,
    filterByPosition,
    filterByGender,
    sortUser,
  };
}
