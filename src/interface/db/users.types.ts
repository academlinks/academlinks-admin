import { WorkplaceT, EducationT, LivingPlaceT } from "./crossOver.types";

export interface UserLabelT {
  _id: string;
  profileImg: string;
  email: string;
  firstName: string;
  lastName: string;
  userName: string;
  birthDate: string;
  gender: "male" | "famale";
  createdAt: string;
}

export interface UserDetailsT {
  _id: string;
  userName: string;
  email: string;
  profileImg: string;
  birthDate: string;
  gender: string;
  createdAt: string;
  currentLivingPlace: LivingPlaceT;
  from: LivingPlaceT;
  workplace: WorkplaceT[];
  education?: EducationT[];
}
