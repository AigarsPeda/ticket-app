import React from "react";

interface IButton {
  label: string;
  type: "button" | "submit" | "reset";
  className: string;
  handleClick: () => void;
}

const Button: React.FC<IButton> = (props) => {
  const { label, type, className, handleClick } = props;
  return (
    <>
      <button type={type} className={className} onClick={handleClick}>
        {label}
      </button>
    </>
  );
};

export default Button;
