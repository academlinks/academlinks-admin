import { axiosQuery } from "../../axiosConfig";

import {
  GetRegistrationRequestDetailsPropsT,
  FilterKeyT,
} from "../../../interface/reducers/registrationReducer.types";

export async function getRegistrationLabelsQuery(key: FilterKeyT) {
  return await axiosQuery(`/administration/label/registrations?filter=${key}`);
}

export async function getRegistrationRequestDetailsQuery({
  registrationId,
}: GetRegistrationRequestDetailsPropsT) {
  return await axiosQuery(`/administration/registrations/${registrationId}`);
}
