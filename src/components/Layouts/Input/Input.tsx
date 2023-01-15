import React from "react";

import { InputFieldContainer } from "./input.styles";

interface InputType {
  value?: string;
  onChange?: (txt: string) => void;
  name: string;
  placeholder: string;
  type?: string;
  label?: string;
  id?: string;
  error?: boolean;
  message?: string;
  defaultValue?: string;
}

const Input: React.FC<InputType> = ({
  value,
  onChange = () => {},
  name,
  placeholder = "text",
  type = "text",
  label,
  id,
  error,
  message,
  defaultValue,
}) => {
  return (
    <InputFieldContainer data-input-field-container>
      {label && (
        <label htmlFor={id} data-input-field-label>
          {label}
        </label>
      )}
      <input
        data-input-field
        id={id}
        value={value}
        defaultValue={defaultValue}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        type={type}
        name={name}
      />
      {error && <p data-innput-field-error>{message}</p>}
    </InputFieldContainer>
  );
};

export default Input;
