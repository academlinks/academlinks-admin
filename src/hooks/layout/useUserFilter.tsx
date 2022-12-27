import { useAppDispatch } from "../../store/hooks";

import {
  setFilterByLivingPlace,
  setFilterByRegistration,
  setFilterByBirthdate,
  setFilterByGender,
  setSort,
} from "../../store/reducers/userReducer";

import {
  FilterLivingPlaceT,
  FilterRegistrationT,
  FilterBirthDate,
  FilterGenderT,
  FilterSortT,
} from "../../interface/reducers/usersReducer.types";

export default function useUserFilter() {
  const dispatch = useAppDispatch();

  function filterByLivingPlace(params: FilterLivingPlaceT) {
    dispatch(setFilterByLivingPlace(params));
  }

  function filterByRegistrationDate(params: FilterRegistrationT) {
    dispatch(setFilterByRegistration(params));
  }

  function filterByBirthDate(params: FilterBirthDate) {
    dispatch(setFilterByBirthdate(params));
  }

  function filterByGender(params: FilterGenderT) {
    dispatch(setFilterByGender(params));
  }

  function sortUser(params: FilterSortT) {
    dispatch(setSort(params));
  }

  return {
    filterByLivingPlace,
    filterByRegistrationDate,
    filterByBirthDate,
    filterByGender,
    sortUser,
  };
}
