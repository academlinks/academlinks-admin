export interface CommercialT {
  _id: string;
  client: string;
  validUntil: string;
  isLinkable: boolean;
  link?: string;
  media: string;
  location: {
    page: string;
    side: string;
  };
  createdAt: string;
  updatedAt: string;
}
