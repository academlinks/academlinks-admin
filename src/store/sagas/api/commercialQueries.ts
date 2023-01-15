import { axiosQuery, axiosFormDataQuery } from "../../axiosConfig";

import {
  CreateCommercialPropsT,
  GetCommercialsPropsT,
  GetCommercialPropsT,
  DeleteCommercialPropsT,
  SendEmailPropsT,
} from "../../../interface/reducers/commercialReducer.types";

export async function createCommercialQuery(body: CreateCommercialPropsT) {
  await axiosFormDataQuery.post("/administration/commercials", body);
}

export async function updateCommercialQuery(
  body: CreateCommercialPropsT,
  commercialId: string
) {
  await axiosFormDataQuery.patch(
    `/administration/commercials/${commercialId}`,
    body
  );
}

export async function deleteCommercialQuery({
  commercialId,
}: DeleteCommercialPropsT) {
  await axiosQuery.delete(`/administration/commercials/${commercialId}`);
}

export async function getCommercialsQuery({ query }: GetCommercialsPropsT) {
  return await axiosQuery(`/administration/commercials${query}`);
}

export async function getCommercialQuery({
  commercialId,
}: GetCommercialPropsT) {
  return await axiosQuery(`/administration/commercials/${commercialId}`);
}

export async function sendEmailQuery(body: SendEmailPropsT) {
  return await axiosQuery.post("/administration/commercials/customer", body);
}
