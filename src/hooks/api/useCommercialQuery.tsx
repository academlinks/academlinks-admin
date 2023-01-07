import { useAppDispatch } from "../../store/hooks";

import {
  createCommercial,
  getCommercials,
} from "../../store/reducers/commercialsReducer";

import {
  CreateCommercialPropsT,
  GetCommercialsPropsT,
} from "../../interface/reducers/commercialReducer.types";

export default function useCommercialQuery() {
  const dispatch = useAppDispatch();

  function createCommercialQuery(params: CreateCommercialPropsT) {
    dispatch(createCommercial(params));
  }

  function getConersationsQuery(params: GetCommercialsPropsT) {
    dispatch(getCommercials(params));
  }

  return { createCommercialQuery, getConersationsQuery };
}
