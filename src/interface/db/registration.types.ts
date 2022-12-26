import { LivingPlaceT, WorkplaceT } from "./crossOver.types";

export interface RegistrationLabelsT {
  _id: string;
  email: string;
  gender: string;
  userName: string;
}

export interface RegistrationRequestDetailsT {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  birthDate: string;
  gender: string;
  currentLivingPlace: LivingPlaceT;
  from: LivingPlaceT;
  workplace: WorkplaceT;
  aproved: boolean;
  userName: string;
}
