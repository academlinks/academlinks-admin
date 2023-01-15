import { useAppDispatch } from "../../store/hooks";

import {
  resetOperationError,
  createCommercial,
  updateCommercial,
  getCommercials,
  getCommercial,
  deleteCommercial,
  setCommercialSuccessfullCreation,
  sendEmail,
} from "../../store/reducers/commercialsReducer";

import {
  CreateCommercialPropsT,
  GetCommercialsPropsT,
  GetCommercialPropsT,
  DeleteCommercialPropsT,
  SendEmailPropsT,
} from "../../interface/reducers/commercialReducer.types";

type CommercialDefaultBody = Omit<CreateCommercialPropsT, "location"> & {
  page: "feed" | "blogPost";
  side: "left" | "right";
};

export default function useCommercialQuery() {
  const dispatch = useAppDispatch();

  function createCommercialBody(
    params: CommercialDefaultBody
  ): CreateCommercialPropsT {
    const b: CreateCommercialPropsT = {
      client: params.client,
      media: params.media,
      isLinkable: params.link ? true : false,
      validUntil: params.validUntil,
      location: {
        page: params.page,
        side: params.side,
      },
    };

    if (params.image && params.image.size > 0 && params.image.name)
      b.image = params.image;

    if (params.isLinkable) b.link = params.link;

    return b;
  }

  function createCommercialQuery(params: CommercialDefaultBody) {
    const body = createCommercialBody(params);
    dispatch(createCommercial(body));
  }

  function updateCommercialQuery({
    body,
    commercialId,
  }: {
    body: CommercialDefaultBody;
    commercialId: string;
  }) {
    const comercBody = createCommercialBody(body);
    dispatch(updateCommercial({ body: comercBody, commercialId }));
  }

  function getCommercialsQuery(params: GetCommercialsPropsT) {
    dispatch(getCommercials(params));
  }

  function getCommercialQuery(params: GetCommercialPropsT) {
    dispatch(getCommercial(params));
  }

  function deleteCommercialQuery(params: DeleteCommercialPropsT) {
    dispatch(deleteCommercial(params));
  }

  function handleResetOperationError() {
    dispatch(resetOperationError());
  }

  function handleSetCommercialSuccessfullCreation(params: null | boolean) {
    dispatch(setCommercialSuccessfullCreation(params));
  }

  function sendEmailQuery(params: SendEmailPropsT) {
    dispatch(sendEmail(params));
  }

  return {
    handleResetOperationError,
    createCommercialQuery,
    updateCommercialQuery,
    getCommercialsQuery,
    getCommercialQuery,
    deleteCommercialQuery,
    handleSetCommercialSuccessfullCreation,
    sendEmailQuery,
  };
}
