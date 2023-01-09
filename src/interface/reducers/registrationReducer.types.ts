import {
  RegistrationLabelsT,
  RegistrationRequestDetailsT,
} from "../db/registration.types";

export interface StateT {
  sideBarLoadingState: LoadingStateT;
  contentLoadingState: LoadingStateT;
  operationLoadingState: LoadingStateT;
  registrationLabels: RegistrationLabelsT[];
  requestDetails?: RegistrationRequestDetailsT;
  redirectAlert: {
    redirect: boolean;
    path: "empty" | string;
  };
  filterKey: FilterKeyT;
}

interface LoadingStateT {
  loading: boolean;
  error: boolean;
  message: string;
}

export interface GetRegistrationRequestDetailsPropsT {
  registrationId: string;
}

export interface RequestMutationPropsT {
  registrationId: string;
}

export type FilterKeyT = "aproved" | "new";
