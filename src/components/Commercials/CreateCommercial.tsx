/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useAppSelector } from "../../store/hooks";

import { useCommercialQuery } from "../../hooks";
import {
  selectCommercialOperationLoadingState,
  selectComercialCreationStatus,
} from "../../store/selectors/commercialSelectors";

import { Input, Select, Button, Spinner, Error } from "../Layouts";
import { CreateCommercialForm } from "./commercial.styled";
import CreateCommercialMediaBox from "./components/CreateCommercialMediaBox";

const CreateCommercial: React.FC = () => {
  const navigate = useNavigate();

  const { state } = useLocation();
  const updateCredentials = state && state.commercial ? state.commercial : null;
  const operationType = state && state.operation ? state.operation : null;

  const isSuccessfullyCreated = useAppSelector(selectComercialCreationStatus);

  const {
    createCommercialQuery,
    updateCommercialQuery,
    handleResetOperationError,
  } = useCommercialQuery();

  const { error, loading, message } = useAppSelector(
    selectCommercialOperationLoadingState
  );

  const [isLinkable, setIsLinkable] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const formData = new FormData(formRef.current!);
    const commercialForm: any = {};

    for (const [key, value] of formData) {
      commercialForm[key] = value;
    }

    if (operationType && operationType === "update") {
      updateCommercialQuery({
        commercialId: updateCredentials._id,
        body: {
          client: commercialForm.client,
          image: commercialForm.image,
          media:
            updateCredentials && updateCredentials.media
              ? updateCredentials.media
              : "",
          isLinkable: commercialForm.link ? true : false,
          link: commercialForm.link,
          validUntil: commercialForm.validUntil,
          page: commercialForm.page,
          side: commercialForm.side,
        },
      });
    } else {
      createCommercialQuery({
        client: commercialForm.client,
        image: commercialForm.image,
        isLinkable: commercialForm.link ? true : false,
        link: commercialForm.link,
        validUntil: commercialForm.validUntil,
        page: commercialForm.page,
        side: commercialForm.side,
      });
    }
  }

  useEffect(() => {
    if (updateCredentials && updateCredentials.isLinkable) {
      setIsLinkable(true);
    }
  }, [updateCredentials]);

  useEffect(() => {
    if (isSuccessfullyCreated === null) return;
    navigate("/dashboard/commercials?active=true", { replace: true });
  }, [isSuccessfullyCreated]);

  return (
    <CreateCommercialForm onSubmit={handleSubmit} ref={formRef}>
      {loading && <Spinner type="stand" />}

      {error && (
        <Error
          boxType="modal"
          message={message}
          onClose={handleResetOperationError}
        />
      )}

      <CreateCommercialMediaBox
        defaultMedia={
          updateCredentials && updateCredentials.media
            ? updateCredentials.media
            : ""
        }
      />

      <Input
        placeholder="client"
        label="client"
        id="client"
        error={false}
        message="some error msg here"
        name="client"
        defaultValue={
          updateCredentials && updateCredentials.client
            ? updateCredentials.client
            : ""
        }
      />

      <Input
        placeholder="client email"
        label="email"
        id="email"
        error={false}
        message="some error msg here"
        name="email"
        defaultValue={
          updateCredentials && updateCredentials.email
            ? updateCredentials.email
            : ""
        }
      />

      <Input
        placeholder="client phone number"
        label="phone number"
        id="phoneNumber"
        error={false}
        message="some error msg here"
        name="phone"
        defaultValue={
          updateCredentials && updateCredentials.phone
            ? updateCredentials.phone
            : ""
        }
      />

      <Input
        placeholder="date"
        label="outdate point"
        id="outdate"
        error={false}
        message="some error msg here"
        type="date"
        name="validUntil"
        defaultValue={
          updateCredentials && updateCredentials.validUntil
            ? new Date(updateCredentials.validUntil).toISOString().slice(0, 10)
            : ""
        }
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
        defaultValue={
          updateCredentials && updateCredentials.location?.page
            ? updateCredentials.location.page
            : ""
        }
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
        defaultValue={
          updateCredentials && updateCredentials.location?.side
            ? updateCredentials.location.side
            : ""
        }
      />

      <div data-input-field-container className="linkable-field">
        <div className="linkable-field__labelBox" data-input-field-label>
          <input
            type="checkbox"
            id="isLinkable"
            checked={isLinkable}
            onChange={(e) => setIsLinkable(e.target.checked)}
          />
          <label htmlFor="isLinkable">is linkable</label>
        </div>

        {isLinkable && (
          <Input
            placeholder="link"
            error={false}
            message="some error msg here"
            name="link"
            defaultValue={
              updateCredentials && updateCredentials.link
                ? updateCredentials.link
                : ""
            }
          />
        )}
      </div>

      <Button
        label={
          operationType && operationType === "update" ? "update" : "create"
        }
        type="submit"
        className="commercial-submit__btn"
      />
    </CreateCommercialForm>
  );
};

export default CreateCommercial;
