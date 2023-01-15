import React from "react";

import { SpinnerBox } from "./spinner.styles";
import { ImSpinner3 } from "react-icons/im";

export type SpinnerT = "stand" | "block";
interface SpinnerType {
  type?: SpinnerT;
}

const Spinner: React.FC<SpinnerType> = ({ type = "block" }) => {
  return (
    <SpinnerBox type={type}>
      <span>
        <ImSpinner3 />
      </span>
    </SpinnerBox>
  );
};

export default Spinner;
