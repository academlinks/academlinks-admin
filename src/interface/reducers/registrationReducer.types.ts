import {
  RegistrationLabelsT,
  RegistrationRequestDetailsT,
} from "../db/registration.types";

export interface StateT {
  sideBarLoadingState: LoadingStateT;
  contentLoadingState: LoadingStateT;
  operationLoadingState: LoadingStateT;
  registrationLabels: RegistrationLabelsT[];
  registrationCounts: number;
  requestDetails?: RegistrationRequestDetailsT;
  filterKey: FilterKeyT;
  redirectAlert: {
    redirect: boolean;
    path: "empty" | string;
  };
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

// props

export type SetNewRegRequestCountT = number;
