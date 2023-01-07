import { RootStateT } from "..";

export const selectCommercialTarget = ({ commercials }: RootStateT) =>
  commercials.commercialTarget;

export const selectCommercialOperationState = ({ commercials }: RootStateT) =>
  commercials.operationLoadingState;

export const selectCommercialState = ({ commercials }: RootStateT) =>
  commercials.loadingState;
