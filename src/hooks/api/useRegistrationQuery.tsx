import { useAppDispatch } from "../../store/hooks";

import {
  getRegistrationLabels,
  getRegistrationRequesDetails,
  aproveRequest,
  deleteRequest,
  // NaN API Tasks
  resetRedirectAlert,
  setFilterKey,
} from "../../store/reducers/registrationReducer";

import {
  GetRegistrationRequestDetailsPropsT,
  RequestMutationPropsT,
  FilterKeyT,
} from "../../interface/reducers/registrationReducer.types";

export default function useRegistrationQuery() {
  const dispatch = useAppDispatch();

  function getRegistrationLabelsQuery(key: FilterKeyT) {
    dispatch(getRegistrationLabels(key));
  }

  function getRegistrationRequestDetailsQuery({
    registrationId,
  }: GetRegistrationRequestDetailsPropsT) {
    dispatch(getRegistrationRequesDetails({ registrationId }));
  }

  function aproveRequestQuery({ registrationId }: RequestMutationPropsT) {
    dispatch(aproveRequest({ registrationId }));
  }

  function deleteRequestQuery({ registrationId }: RequestMutationPropsT) {
    dispatch(deleteRequest({ registrationId }));
  }

  //NaN API Task
  function handleResetRedirectAlert() {
    dispatch(resetRedirectAlert());
  }

  function handleFilterKey(key: FilterKeyT) {
    dispatch(setFilterKey(key));
  }

  return {
    getRegistrationLabelsQuery,
    getRegistrationRequestDetailsQuery,
    aproveRequestQuery,
    deleteRequestQuery,
    //NaN API Task
    handleResetRedirectAlert,
    handleFilterKey,
  };
}
