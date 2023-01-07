import React from "react";

import { SelectFieldContainer } from "./select.styled";

interface SelectType {
  name: string;
  values: { value: string; caption: string }[];
  label?: string;
  id?: string;
  error?: boolean;
  message?: string;
  multiple?: boolean;
}

const Select: React.FC<SelectType> = ({
  name,
  values,
  label,
  id,
  error,
  message,
  multiple = false,
}) => {
  return (
    <SelectFieldContainer data-input-field-container>
      {label && (
        <label htmlFor={id} data-input-field-label>
          {label}
        </label>
      )}
      <select id={id} name={name} multiple={multiple} data-input-field>
        {values.map((val) => (
          <option key={val.value} value={val.value}>
            {val.caption}
          </option>
        ))}
      </select>
      {error && <p data-innput-field-error>{message}</p>}
    </SelectFieldContainer>
  );
};

export default Select;
