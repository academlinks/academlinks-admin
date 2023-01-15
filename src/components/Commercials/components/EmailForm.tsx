import React from "react";

import { Input } from "../../Layouts";
interface EmailFormType {
  adressat: string;
  emailSuccessfullySend: boolean;
}

const EmailForm = React.forwardRef(
  (
    { adressat, emailSuccessfullySend }: EmailFormType,
    ref: React.Ref<HTMLFormElement>
  ) => {
    return (
      <>
        <p className="send-email--to">
          to:&nbsp;
          <strong>{adressat}</strong>
        </p>

        <form className="send-email--form" ref={ref}>
          <Input
            placeholder="subject"
            label="subject"
            id="subject"
            error={false}
            message="some error msg here"
            name="subject"
          />

          <div className="email-text--field">
            <label htmlFor="email-text" className="email-text--field__label">
              text
            </label>
            <textarea
              id="email-text"
              placeholder="email text"
              name="text"
              className="email-text--field__textarea"
              rows={4}
            />
          </div>
        </form>

        {emailSuccessfullySend && (
          <p className="email-is--send__msg">email sent successfully</p>
        )}
      </>
    );
  }
);

export default EmailForm;
