import { useAppDispatch } from "../../store/hooks";

import {
  setCommercialTargetKey,
  resetCommercial,
  resetCommercials,
} from "../../store/reducers/commercialsReducer";
import { CommercialTargetT } from "../../interface/reducers/commercialReducer.types";

export default function useCommercials() {
  const dispatch = useAppDispatch();

  function handleCommercialTarget(target: CommercialTargetT) {
    dispatch(setCommercialTargetKey(target));
  }

  function handleResetCommercial() {
    dispatch(resetCommercial());
  }

  function handleResetCommercials() {
    dispatch(resetCommercials());
  }

  return {
    handleCommercialTarget,
    handleResetCommercial,
    handleResetCommercials,
  };
}
