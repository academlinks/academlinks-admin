import React, { useState, useRef } from "react";

import { AiFillCamera } from "react-icons/ai";
import { CreateCommercialMediaBoxContainer } from "./createCommercialMediaBox.styles";
import { Button } from "../../Layouts";

interface CreateCommercialMediaBoxType {}
type MediaT = File | null;

const CreateCommercialMediaBox: React.FC<CreateCommercialMediaBoxType> = () => {
  const mediaRef = useRef<HTMLInputElement>(null);
  const [media, setMedia] = useState<MediaT>(null);

  return (
    <CreateCommercialMediaBoxContainer>
      <figure
        className={`media-box__fig ${media ? "active-selected-img" : ""}`}
      >
        <img
          src={media ? URL.createObjectURL(media) : "/assets/media.png"}
          alt="commercial fig"
        />
        <label className="choose-media--btn" htmlFor="commercialMedia">
          <AiFillCamera />
        </label>
      </figure>
      <input
        id="commercialMedia"
        type="file"
        hidden
        ref={mediaRef}
        name="image"
        onChange={(
          e: React.ChangeEvent<HTMLInputElement> & {
            target: { files: File[] };
          }
        ) => e.target != null && setMedia(e.target.files[0])}
      />
      {media && (
        <Button
          label="discard selected media"
          onClick={() => {
            setMedia(null);
            if (mediaRef.current) mediaRef.current.value = "";
          }}
        />
      )}
    </CreateCommercialMediaBoxContainer>
  );
};

export default CreateCommercialMediaBox;
