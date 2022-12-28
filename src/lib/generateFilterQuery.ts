import {
  FilterT,
  FilterLivingPlaceT,
  FilterRegistrationT,
  FilterBirthDateT,
  FilterByDateTargetT,
  FilterByLivingPlaceTargetT,
  FilterByLivingPlaceNestT,
} from "../interface/reducers/usersReducer.types";

interface ShalowT {
  livingPlace?: Omit<FilterLivingPlaceT, "target" | "nest"> & {
    target?: FilterByLivingPlaceTargetT;
    nest?: FilterByLivingPlaceNestT;
  };
  registration?: Omit<FilterRegistrationT, "target"> & {
    target?: FilterByDateTargetT;
  };
  birthDate?: Omit<FilterBirthDateT, "target"> & {
    target?: FilterByDateTargetT;
  };
}

export default function generateFilterQuery(params: FilterT): string {
  const shalow: ShalowT = { ...params };
  const queryArray = [];
  // ?currCity=tbilsi&currCountry=georgia&fromCity=paris&fromCountry=france&createdAt[gte]=01-20-2020&createdAt[lte]=01-20-2021&birthDate[gte]=01-20-2020&birthDate[lte]=01-20-2021
  for (const [key, value] of Object.entries(shalow)) {
    if (key === "livingPlace") {
      if (value?.from) {
        value.from.country &&
          queryArray.push(`fromCountry=${value.from.country}`);
        value.from.city && queryArray.push(`fromCity=${value.from.city}`);
      }
      if (value?.current) {
        value.current.country &&
          queryArray.push(`currCountry=${value.current.country}`);
        value.current.city && queryArray.push(`currCity=${value.from.city}`);
      }
    }

    if (key === "registration") {
      value.from && queryArray.push(`createdAt[gte]=${value.from}`);
      value.to && queryArray.push(`createdAt[lte]=${value.to}`);
    }

    if (key === "birthDate") {
      value.from && queryArray.push(`birthDate[gte]=${value.from}`);
      value.to && queryArray.push(`birthDate[lte]=${value.to}`);
    }

    if (key === "position") value && queryArray.push(`position=${value}`);
  }

  return queryArray.join("&");
}
