export interface LivingPlaceT {
  city: string;
  country: string;
  _id: string;
}

export interface YearsT {
  from?: string;
  to?: string;
}

export interface WorkplaceT {
  _id: string;
  institution: string;
  position?: string;
  description?: string;
  workingYears?: YearsT;
}

export interface EducationT {
  years?: YearsT;
  collage: string;
  faculty: string;
  degree: string;
  description: string;
  _id: string;
}
