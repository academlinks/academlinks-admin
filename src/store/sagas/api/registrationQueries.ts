import { axiosQuery } from "../../axiosConfig";

import { GetRegistrationRequestDetailsPropsT } from "../../../interface/reducers/registrationReducer.types";

export async function getRegistrationLabelsQuery() {
  return await axiosQuery("/administration/label/registrations");
}

export async function getRegistrationRequestDetailsQuery({
  registrationId,
}: GetRegistrationRequestDetailsPropsT) {
  return await axiosQuery(`/administration/registrations/${registrationId}`);
}
