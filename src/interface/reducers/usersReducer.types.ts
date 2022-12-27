export interface GetUserLabelPropsT {
  query?: {
    page: number;
    limit: number;
    hasMore: boolean;
  };
}

export interface GetUserDetailsPropsT {
  userId: string;
}

// Filter
export interface FilterT {
  livingPlace?: FilterLivingPlaceT;
  registration?: FilterRegistrationT;
  birthDate?: FilterBirthDate;
  gender?: FilterGenderT;
  sort?: FilterSortT;
}

export interface FilterBirthDate {
  from?: string;
  to?: string;
  target: "from" | "to";
}

export interface FilterRegistrationT {
  from?: string;
  to?: string;
  target: "from" | "to";
}

export interface FilterLivingPlaceT {
  from?: {
    city?: string;
    country?: string;
  };
  current?: {
    city?: string;
    country?: string;
  };
  target: "from" | "current";
  nest: "city" | "country";
}

export type FilterGenderT = "default" | "male" | "female";

export type FilterSortT =
  | "default"
  | "registrationDate"
  | "firstName"
  | "lastName"
  | "userName"
  | "age"
  | "gender";
