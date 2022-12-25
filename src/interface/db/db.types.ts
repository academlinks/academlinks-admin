export interface UserBaseT {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  userName: string;
  education?: EducationT[];
  birthDate: string;
  currentLivingPlace: LivingPlaceT;
  workplace: WorkplaceT[];
  gender: string;
  from: LivingPlaceT;
  profileImg: string;
  coverImg: string;
  role: string;
}

export interface UserShortT {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  userName: string;
  gender: string;
  birthDate: string;
}

export interface UserInfoT {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  birthDate: string;
  gender: string;
  currentLivingPlace: LivingPlaceT;
  workplace: WorkplaceT;
  from: LivingPlaceT;
}

// Nested
export interface WorkplaceT {
  company: string;
  position?: string;
  description?: string;
  workingYears?: YearsT;
  _id: string;
}

export interface LivingPlaceT {
  country: string;
  city: string;
}

export interface EducationT {
  collage: string;
  faculty?: string;
  degree?: string;
  description?: string;
  years?: YearsT;
  _id: string;
}

interface YearsT {
  from: string;
  to: string;
}
