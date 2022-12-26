import { axiosQuery } from "../../axiosConfig";

import { AuthCredentialsT } from "../../../interface/reducers/authReducer.types";

export async function loginQuery({ userName, password }: AuthCredentialsT) {
  return await axiosQuery.post("/administration/login", { password, userName });
}

export async function logoutQuery() {}
