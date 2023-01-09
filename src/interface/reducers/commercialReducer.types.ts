import { CommercialT } from "../db/commercial.types";

export interface StateT {
  sideBarLoadingState: LoadingStateT;
  contentLoadingState: LoadingStateT;
  operationLoadingState: LoadingStateT;
  commercialTarget: CommercialTargetT;
  commercials: CommercialT[];
  commercial?: CommercialT | null;
  getNewCommercialAlert: GetNewCommercialAlert;
  commercialCreatedSuccessfully: null | boolean;
}

interface LoadingStateT {
  loading: boolean;
  message: string;
  error: boolean;
}

interface GetNewCommercialAlert {
  getNew: boolean;
  id: string;
  isEmpty: boolean;
}

export type CommercialTargetT = "active" | "outdated" | "all" | "create";

export interface CreateCommercialPropsT {
  client: string;
  validUntil: Date;
  isLinkable?: boolean;
  link?: string;
  image?: File;
  media?: string;
  location: {
    page: "feed" | "blogPost";
    side: "left" | "right";
  };
}

export interface UpdateCommercialPropsT {
  body: CreateCommercialPropsT;
  commercialId: string;
}

export interface GetCommercialsPropsT {
  query: string;
}

export interface GetCommercialPropsT {
  commercialId: string;
}

export interface DeleteCommercialPropsT {
  commercialId: string;
}
