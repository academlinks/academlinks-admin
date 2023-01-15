import { axiosQuery } from "../../axiosConfig";
import {
  GetUserLabelPropsT,
  GetUserDetailsPropsT,
  DeleteUserPropsT,
} from "../../../interface/reducers/usersReducer.types";

export async function getUserLabelsQuery({ query }: GetUserLabelPropsT) {
  return await axiosQuery(
    `/administration/label/users${query ? `?${query}` : ""}`
  );
}

export async function getUserDetailsQuery(params: GetUserDetailsPropsT) {
  return await axiosQuery(`/administration/users/${params.userId}/info`);
}

export async function deleteUserQuery({ userId }: DeleteUserPropsT) {
  return await axiosQuery.delete(`/user/${userId}`);
}
