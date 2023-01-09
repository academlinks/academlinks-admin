import { RootStateT } from "..";

/////SECTION: Loading States /////

export const selectRegistrationSideBarLoadingState = ({
  registration,
}: RootStateT) => registration.sideBarLoadingState;

export const selectRegistrationContentLoadingState = ({
  registration,
}: RootStateT) => registration.contentLoadingState;

export const selectRegistrationOperationLoadingState = ({
  registration,
}: RootStateT) => registration.operationLoadingState;

/////SECTION:
export const selectRegistrationRedirectAlert = ({ registration }: RootStateT) =>
  registration.redirectAlert;
export const selectRegistrationFilterKey = ({ registration }: RootStateT) =>
  registration.filterKey;

export const selectRegistrationLabels = ({ registration }: RootStateT) =>
  registration.registrationLabels;
export const selectRegistrationRequestDetails = ({
  registration,
}: RootStateT) => registration.requestDetails;
