import { RootStateT } from "..";

///////////////////////////
///// Loading States /////
/////////////////////////

export const selectCommercialOperationLoadingState = ({
  commercials,
}: RootStateT) => commercials.operationLoadingState;

export const selectCommercialSideBarLoadingState = ({
  commercials,
}: RootStateT) => commercials.sideBarLoadingState;

export const selectCommercialContentLoadingState = ({
  commercials,
}: RootStateT) => commercials.contentLoadingState;

////////////////////////////
///// Commercial List /////
//////////////////////////
export const selectCommercialsList = ({ commercials }: RootStateT) =>
  commercials.commercials;

export const selectCommercial = ({ commercials }: RootStateT) =>
  commercials.commercial;

export const selectOutdateCommercialsCount = ({ commercials }: RootStateT) =>
  commercials.outDatedCommercialsCount;

///////////////////////////
///// Commercial Nav /////
/////////////////////////
export const selectCommercialTarget = ({ commercials }: RootStateT) =>
  commercials.commercialTarget;

export const selectGetNewCommercialAlert = ({ commercials }: RootStateT) =>
  commercials.getNewCommercialAlert;

/////////////////////////

export const selectComercialCreationStatus = ({ commercials }: RootStateT) =>
  commercials.commercialCreatedSuccessfully;

export const selectEmailSuccessfullySend = ({ commercials }: RootStateT) =>
  commercials.emailSuccessfullySent;
