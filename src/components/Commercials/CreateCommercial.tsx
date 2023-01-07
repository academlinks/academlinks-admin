import React, { useState, useRef, FormEvent } from "react";

import { useAppSelector } from "../../store/hooks";

import { useCommercialQuery } from "../../hooks";
import { selectCommercialOperationState } from "../../store/selectors/commercialSelectors";

import { Input, Select, Button, Spinner } from "../Layouts";
import { CreateCommercialForm } from "./commercial.styled";
import CreateCommercialMediaBox from "./components/CreateCommercialMediaBox";

const CreateCommercial: React.FC = () => {
  const { createCommercialQuery } = useCommercialQuery();
  const { error, loading, message } = useAppSelector(
    selectCommercialOperationState
  );

  const isLinkableRef = useRef<HTMLInputElement>(null);
  const [isLinkable, setIsLinkable] = useState(false);
  const handleLinkable = () =>
    isLinkableRef.current && setIsLinkable(isLinkableRef.current.checked);

  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const commercialForm: any = {};

    for (const [key, value] of formData) {
      commercialForm[key] = value;
    }

    createCommercialQuery({
      client: commercialForm.client,
      image: commercialForm.image,
      isLinkable: commercialForm.link ? true : false,
      link: commercialForm.link,
      validUntil: commercialForm.validUntil,
      location: {
        page: commercialForm.page,
        side: commercialForm.side,
      },
    });
  }

  return (
    <CreateCommercialForm onSubmit={handleSubmit} ref={formRef}>
      {loading && <Spinner type="stand" />}

      <CreateCommercialMediaBox />

      <Input
        placeholder="client"
        label="client"
        id="client"
        error={false}
        message="some error msg here"
        name="client"
      />

      <Input
        placeholder="date"
        label="outdate point"
        id="outdate"
        error={false}
        message="some error msg here"
        type="date"
        name="validUntil"
      />

      <Select
        label="on page"
        id="page"
        name="page"
        multiple={false}
        values={[
          { value: "feed", caption: "feed" },
          { value: "blogPost", caption: "blog post" },
        ]}
        error={false}
        message="some err msg"
      />

      <Select
        label="side"
        id="side"
        name="side"
        values={[
          { value: "left", caption: "left" },
          { value: "right", caption: "right" },
        ]}
        error={false}
        message="some err msg"
      />

      <div data-input-field-container className="linkable-field">
        <div
          className="linkable-field__labelBox"
          data-input-field-label
          onClick={handleLinkable}
        >
          <input type="checkbox" id="isLinkable" ref={isLinkableRef} />
          <label htmlFor="isLinkable">is linkable</label>
        </div>
        {isLinkable && (
          <Input
            placeholder="link"
            error={false}
            message="some error msg here"
            name="link"
          />
        )}
      </div>

      <Button label="create" type="submit" className="commercial-submit__btn" />
    </CreateCommercialForm>
  );
};

export default CreateCommercial;
