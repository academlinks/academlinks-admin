import { RootStateT } from "..";

export const selectStatisticLoadingState = ({ statistics }: RootStateT) =>
  statistics.loadingState;

export const selectStatisticAgeRange = ({ statistics }: RootStateT) =>
  statistics.ageRange;

export const selectStatisticGender = ({ statistics }: RootStateT) =>
  statistics.gender;

export const selectStatisticRegDates = ({ statistics }: RootStateT) =>
  statistics.regDates;

export const selectStatisticByPosition = ({ statistics }: RootStateT) =>
  statistics.byPosition;

export const selectStatisticByInstitution = ({ statistics }: RootStateT) =>
  statistics.byInstitution;

export const selectStatisticByCurrCountry = ({ statistics }: RootStateT) =>
  statistics.byCurrentCountry;

export const selectStatisticByHomeland = ({ statistics }: RootStateT) =>
  statistics.byHomeLand;
