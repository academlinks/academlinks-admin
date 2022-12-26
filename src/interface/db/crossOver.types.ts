export interface WorkplaceT {
  _id: string;
  company: string;
  position?: string;
  description?: string;
  workingYears?: {
    from?: string;
    to?: string;
  };
}

export interface LivingPlaceT {
  city: string;
  country: string;
  _id: string;
}
