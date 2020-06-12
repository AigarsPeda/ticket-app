import React from "react";

interface IRadioInput {
  id: string;
  name: string;
  className: string;
  value: string | number;
  error?: string;
  labelClassName: string;
  onChange: () => void;
}

const RadioInput: React.FC<IRadioInput> = (props) => {
  const { id, name, className, value, error, labelClassName, onChange } = props;
  return (
    <>
      <input
        className={className}
        type="radio"
        name={name}
        id={id}
        value={value}
        autoComplete="false"
        onChange={onChange}
      />
      <label
        className={labelClassName}
        style={{ color: error ? "red" : "#36404a", fontWeight: "normal" }}
        htmlFor={id}
      >
        {value}
      </label>
    </>
  );
};

export default RadioInput;
