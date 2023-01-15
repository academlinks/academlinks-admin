import { UserForStatisticT } from "../db/statistic.types";

export interface StateT {
  loadingState: LoadingStateT;
  users: UserForStatisticT[];
  gender: RangeByGenderT;
  regDates: SimpleRangeT;
  ageRange: SimpleRangeT;
  byPosition: RangeByPositionT;
  byCurrentCountry: RangeByLivingPlaceT;
  byHomeLand: RangeByLivingPlaceT;
  byInstitution: RangeByInstitutionT;
}

interface LoadingStateT {
  loading: boolean;
  error: boolean;
  message: string;
}

// Range Types
interface SimpleRangeT {
  range: number[];
  total: number;
}

interface RangeByGenderT {
  range: number[];
  total: number;
  male: number;
  female: number;
}

interface RangeByPositionT {
  range: number[];
  total: number;
  professorsCount: number;
  associateProfessorsCount: number;
  assistantProfessorsCount: number;
  researcherCount: number;
  administrativPersonalCount: number;
  phdStudentCount: number;
  postDocFellowCount: number;
}

interface RangeByInstitutionT {
  labels: string[];
  range: number[];
  total: number;
  institutionsTotal: number;
}

interface RangeByLivingPlaceT {
  range: number[];
  total: number;
  labels: string[];
  countriesTotal: number;
}

// Prop Types
export interface SetRangeByRegDateT {
  regYear: number;
}
