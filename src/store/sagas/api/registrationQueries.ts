import { axiosQuery } from "../../axiosConfig";

import {
  GetRegistrationRequestDetailsPropsT,
  FilterKeyT,
  RequestMutationPropsT,
} from "../../../interface/reducers/registrationReducer.types";

export async function getRegistrationLabelsQuery(key: FilterKeyT) {
  return await axiosQuery(`/administration/label/registrations?filter=${key}`);
}

export async function getRegistrationRequestDetailsQuery({
  registrationId,
}: GetRegistrationRequestDetailsPropsT) {
  return await axiosQuery(`/administration/registrations/${registrationId}`);
}

export async function deleteRequestQuery({
  registrationId,
}: RequestMutationPropsT) {
  return await axiosQuery.delete(
    `/authentication/aprove-register/${registrationId}`
  );
}

export async function aproveRequestQuery({
  registrationId,
}: RequestMutationPropsT) {
  return await axiosQuery.post(
    `/authentication/aprove-register/${registrationId}`
  );
}
