import React from "react";

interface IFormInput {
  id?: string;
  name: string;
  type: "text" | "number " | "password";
  placeholder: string;
  className?: string;
  value: string | number;
  error?: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormInput: React.FC<IFormInput> = (props) => {
  const {
    id,
    name,
    type = "text",
    placeholder,
    className = "",
    value,
    error,
    label,
    onChange
  } = props;
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        className={className}
        onChange={onChange}
        autoComplete="false"
        style={{ border: error ? "solid 1px red" : undefined }}
      />
      {error ? (
        <p style={{ color: "red", fontSize: "14px" }}>{error}</p>
      ) : undefined}
    </>
  );
};

export default FormInput;
