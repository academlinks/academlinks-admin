import { LivingPlaceT } from "./crossOver.types";

export interface RegistrationLabelsT {
  _id: string;
  email: string;
  gender: string;
  userName: string;
}

export interface RegistrationRequestDetailsT {
  _id: string;
  aproved: boolean;
  email: string;
  userName: string;
  firstName: string;
  lastName: string;
  gender: string;
  currentLivingPlace: LivingPlaceT;
  from: LivingPlaceT;
  registrationBio: RegistrationBioT;
}

export interface RegistrationBioT {
  _id: string;
  institution: string;
  position: string;
  description: string;
}
