export interface StateT {
  loadingState: LoadingStateT;
  operationLoadingState: LoadingStateT;
  commercialTarget: CommercialTargetT;
}

interface LoadingStateT {
  loading: boolean;
  message: string;
  error: boolean;
}

export type CommercialTargetT = "active" | "outdated" | "all" | "create";

export interface CreateCommercialPropsT {
  client: string;
  validUntil: Date;
  isLinkable?: boolean;
  link?: string;
  image: string;
  location: {
    page: "feed" | "blogPost";
    side: "left" | "right";
  };
}

export interface GetCommercialsPropsT {
  query: string;
}
