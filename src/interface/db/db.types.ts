export interface UserBaseT {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  userName: string;
  education: Education[];
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
  position: string;
  description?: string;
  workingYears: Years;
  _id?: string;
}

export interface LivingPlaceT {
  country: string;
  city: string;
}

interface Education {
  collage: string;
  faculty: string;
  degree: string;
  description?: string;
  years: Years;
  _id: string;
}

interface Years {
  from: string;
  to: string;
}
