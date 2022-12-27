import { RootStateT } from "..";

export const selectRegistrationLabelsState = ({ registration }: RootStateT) =>
  registration.labelsLoadingState;
export const selectRegistrationContentState = ({ registration }: RootStateT) =>
  registration.contentLoadingState;

export const selectRegistrationRedirectAlert = ({ registration }: RootStateT) =>
  registration.redirectAlert;
export const selectRegistrationFilterKey = ({ registration }: RootStateT) =>
  registration.filterKey;

export const selectRegistrationLabels = ({ registration }: RootStateT) =>
  registration.registrationLabels;
export const selectRegistrationRequestDetails = ({
  registration,
}: RootStateT) => registration.requestDetails;
