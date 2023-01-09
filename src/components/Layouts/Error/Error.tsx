import React from "react";

import { BiError } from "react-icons/bi";
import { ErrorContainer } from "./error.styles";
import { Button } from "..";

export type ErrorBoxT = "modal" | "inline";
interface ErrorType {
  boxType: ErrorBoxT;
  message: string;
  onClose?: () => void;
}

const Error: React.FC<ErrorType> = ({
  boxType,
  message,
  onClose = () => {},
}) => {
  return (
    <ErrorContainer boxType={boxType}>
      <div className="error-window">
        <span className="icon-box">
          <BiError />
        </span>
        <p className="error-msg">{message}</p>
        <Button
          label="cloese the window"
          task="delete"
          className="close-btn"
          onClick={onClose}
        />
      </div>
    </ErrorContainer>
  );
};

export default Error;
