import { useAppDispatch } from "../../store/hooks";

import {
  getRegistrationLabels,
  getRegistrationRequesDetails,
} from "../../store/reducers/registrationReducer";

import { GetRegistrationRequestDetailsPropsT } from "../../interface/reducers/registrationReducer.types";

export default function useRegistrationQueries() {
  const dispatch = useAppDispatch();

  function getRegistrationLabelsQuery() {
    dispatch(getRegistrationLabels());
  }

  function getRegistrationRequestDetailsQuery({
    registrationId,
  }: GetRegistrationRequestDetailsPropsT) {
    dispatch(getRegistrationRequesDetails({ registrationId }));
  }

  return { getRegistrationLabelsQuery, getRegistrationRequestDetailsQuery };
}
