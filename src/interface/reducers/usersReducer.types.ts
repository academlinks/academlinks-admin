import { UserLabelT, UserDetailsT } from "../db/users.types";

export interface StateT {
  sideBarLoadingState: LoadingStateT;
  contentLoadingState: LoadingStateT;
  operationLoadingState: LoadingStateT;
  users: UserLabelT[];
  triggerGetNewUserDetails: {
    getNew: boolean;
    id: string;
    isEmpty: boolean;
  };
  userDetails: UserDetailsT;
  filter: FilterT;
  localeFilter: LocaleFilterT;
}

interface LoadingStateT {
  loading: boolean;
  error: boolean;
  message: string;
}

// db
export interface GetUserLabelPropsT {
  query?: string;
}

export interface GetUserDetailsPropsT {
  userId: string;
}

export interface DeleteUserPropsT {
  userId: string;
}

// ==============================//
// ========== Filter ========== //
// ============================//

// --> db filter
export interface FilterT {
  livingPlace?: FilterLivingPlaceT;
  registration?: FilterRegistrationT;
  birthDate?: FilterBirthDateT;
  position?: FilterPositionT;
  userName?: string;
}

// --> locale filter
export interface LocaleFilterT {
  gender?: FilterGenderT;
  sort?: FilterSortT;
}

export type FilterKeysT =
  | "livingPlace"
  | "registration"
  | "birthdate"
  | "position"
  | "gender"
  | "sort"
  | "userName";

export const TAB_KEYS = {
  LIVING_PLACE: "livingPlace",
  REGISTRATION: "registration",
  BIRTHDATE: "birthDate",
  POSITION: "position",
  GENDER: "gender",
  SORT: "sort",
  USER_NAME: "userName",
};

export type FilterByDateTargetT = "from" | "to";
export type FilterByLivingPlaceTargetT = "from" | "current";
export type FilterByLivingPlaceNestT = "city" | "country";

// --> db filter
export interface FilterLivingPlaceT {
  from?: {
    city?: string;
    country?: string;
  };
  current?: {
    city?: string;
    country?: string;
  };
  target: FilterByLivingPlaceTargetT;
  nest: FilterByLivingPlaceNestT;
}

export interface FilterRegistrationT {
  from?: string;
  to?: string;
  target: FilterByDateTargetT;
}

export interface FilterBirthDateT {
  from?: string;
  to?: string;
  target: FilterByDateTargetT;
}

export type FilterPositionT =
  | "default"
  | "professor"
  | "associate professor"
  | "assistant professor"
  | "researcher"
  | "administrative personnel"
  | "phd student"
  | "post-doc-fellow";

// --> locale filter
export type FilterGenderT = "default" | "male" | "female";

export type FilterSortT =
  | "default"
  | "createdAt"
  | "firstName"
  | "lastName"
  | "userName"
  | "birthDate"
  | "gender";

// --> helpers (is used for map user filter buttons)
export const FilterPositionKeys = [
  { type: "professor", label: "professor" },
  { type: "associate professor", label: "associate professor" },
  { type: "assistant professor", label: "assistant professor" },
  { type: "researcher", label: "researcher" },
  { type: "administrative personnel", label: "administrative personnel" },
  { type: "phd student", label: "phd student" },
  { type: "post-doc-fellow", label: "post-doc-fellow" },
];

export const FilterGenderKeys = [
  { type: "default", label: "default" },
  { type: "male", label: "male" },
  { type: "female", label: "female" },
];

export const FilterSortKeys = [
  { type: "default", label: "default" },
  { type: "createdAt", label: "registration date" },
  { type: "firstName", label: "first name" },
  { type: "lastName", label: "last name" },
  { type: "userName", label: "username" },
  { type: "birthDate", label: "age" },
  { type: "gender", label: "gender" },
];
