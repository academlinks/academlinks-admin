import { axiosQuery } from "../../axiosConfig";

export async function getUsersForStatisticQuery() {
  return await axiosQuery("/administration/users/statistic");
}
