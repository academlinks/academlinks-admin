/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from "react";

import { useAppSelector } from "../../store/hooks";

import {
  selectCommercial,
  selectCommercialOperationLoadingState,
  selectEmailSuccessfullySend,
} from "../../store/selectors/commercialSelectors";
import { useCommercialQuery, useCommercials } from "../../hooks";

import { Spinner, Error } from "../Layouts";
import ActiveCommercialDetails from "./components/ActiveCommercialDetails";
import ActiveCommercialActionBTNs from "./components/ActiveCommercialActionBTNs";
import EmailForm from "./components/EmailForm";
import { ActiveCommercialContainer } from "./commercial.styled";

const ActiveCommercial: React.FC = () => {
  const commercial = useAppSelector(selectCommercial);

  const { loading, error, message } = useAppSelector(
    selectCommercialOperationLoadingState
  );

  const { deleteCommercialQuery, handleResetOperationError, sendEmailQuery } =
    useCommercialQuery();

  const emailSuccessfullySend = useAppSelector(selectEmailSuccessfullySend);
  const { handleEmailSuccessfullySend } = useCommercials();

  const [sendEmailToCustomer, setSendEmailToCustomer] = useState(false);
  const emailFormRef = useRef<HTMLFormElement>(null);

  function handleEmail() {
    const formData = new FormData(emailFormRef.current!);
    const emailForm: any = {};

    for (const [key, value] of formData) {
      emailForm[key] = value;
    }

    commercial?.email &&
      sendEmailQuery({ ...emailForm, email: commercial.email });
  }

  useEffect(() => {
    if (!emailSuccessfullySend) return;

    emailFormRef.current?.reset();

    const timer = setInterval(() => {
      handleEmailSuccessfullySend(false);
      setSendEmailToCustomer(false);
    }, 3000);

    return () => clearInterval(timer);
  }, [emailSuccessfullySend]);

  return (
    <>
      {loading && <Spinner type="stand" />}

      {error && (
        <Error
          boxType="modal"
          message={message}
          onClose={handleResetOperationError}
        />
      )}

      <ActiveCommercialContainer>
        {commercial && (
          <>
            {!sendEmailToCustomer && (
              <ActiveCommercialDetails commercial={commercial} />
            )}

            {sendEmailToCustomer && (
              <EmailForm
                ref={emailFormRef}
                adressat={commercial.email}
                emailSuccessfullySend={emailSuccessfullySend}
              />
            )}

            <ActiveCommercialActionBTNs
              commercial={commercial}
              deleteCommercialQuery={deleteCommercialQuery}
              sendEmailToCustomer={sendEmailToCustomer}
              setSendEmailToCustomer={setSendEmailToCustomer}
              handleEmail={handleEmail}
            />
          </>
        )}
      </ActiveCommercialContainer>
    </>
  );
};

export default ActiveCommercial;
