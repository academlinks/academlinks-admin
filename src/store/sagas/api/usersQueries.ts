import { axiosQuery } from "../../axiosConfig";
import {
  GetUserLabelPropsT,
  GetUserDetailsPropsT,
} from "../../../interface/reducers/usersReducer.types";

function createQuery(query: any) {
  Object.keys(query)
    .map((key) => `${key}=${query[key]}`)
    .concat("&");
}

export async function getUserLabelsQuery(params: GetUserLabelPropsT) {
  let reqQuery;
  if (params.query) reqQuery = createQuery(params.query);

  return await axiosQuery(
    `/administration/label/users${params.query ? `?${reqQuery}` : ""}`
  );
}

export async function getUserDetailsQuery(params: GetUserDetailsPropsT) {
  return await axiosQuery(`/administration/users/${params.userId}/info`);
}
