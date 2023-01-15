export interface CommercialT {
  _id: string;
  client: string;
  email: string;
  phone: string;
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
