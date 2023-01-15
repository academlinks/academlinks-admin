export interface UserForStatisticT {
  currentWorkplace: CurrentWorkplace;
  _id: string;
  createdAt: string;
  gender: string;
  age?: number;
  currentLivingPlace: LivingPlaceT;
  from: LivingPlaceT;
}

interface CurrentWorkplace {
  position: string;
  institution: string;
}

interface LivingPlaceT {
  country: string;
}
