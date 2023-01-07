import { axiosQuery, axiosFormDataQuery } from "../../axiosConfig";

import {
  CreateCommercialPropsT,
  GetCommercialsPropsT,
} from "../../../interface/reducers/commercialReducer.types";

export async function getCommercialsQuery({ query }: GetCommercialsPropsT) {}

export async function createCommercialQuery(body: CreateCommercialPropsT) {
  axiosFormDataQuery.post("/administration/commercials", body);
}

export async function updateCommercialQuery() {
  axiosQuery.patch("/administration/commercials");
}

export async function deleteCommercialQuery() {
  axiosQuery.delete("/administration/commercials");
}
