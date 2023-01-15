import { useAppDispatch } from "../../store/hooks";

import {
  setCommercialTargetKey,
  resetCommercial,
  resetCommercials,
  setEmailSuccessfullySend,
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

  function handleEmailSuccessfullySend(param: boolean) {
    dispatch(setEmailSuccessfullySend(param));
  }

  return {
    handleCommercialTarget,
    handleResetCommercial,
    handleResetCommercials,
    handleEmailSuccessfullySend,
  };
}
