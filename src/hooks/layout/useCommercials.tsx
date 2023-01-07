import { useAppDispatch } from "../../store/hooks";

import { setCommercialTargetKey } from "../../store/reducers/commercialsReducer";
import { CommercialTargetT } from "../../interface/reducers/commercialReducer.types";

export default function useCommercials() {
  const dispatch = useAppDispatch();

  function handleCommercialTarget(target: CommercialTargetT) {
    dispatch(setCommercialTargetKey(target));
  }

  return {handleCommercialTarget};
}
