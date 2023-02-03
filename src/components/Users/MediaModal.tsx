import React from "react";
import { extractRootEndPointFromImg } from "../../lib";

import { MediaModalContainer } from "./mediaModal.styles";
import { MdClose } from "react-icons/md";

interface MediaModalType {
  fig: string;
  alt?: string;
  onClose: () => void;
}

const MediaModal: React.FC<MediaModalType> = ({ fig, alt, onClose }) => {
  return (
    <MediaModalContainer
      onClick={(e) => {
        e.stopPropagation();
        onClose();
      }}
    >
      <div className="media-modal__window" onClick={(e) => e.stopPropagation()}>
        <button
          className="close-btn"
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        >
          <MdClose />
        </button>
        <figure className="media-modal__fig">
          <img src={extractRootEndPointFromImg(fig)} alt={alt || ""} />
        </figure>
      </div>
    </MediaModalContainer>
  );
};

export default MediaModal;
