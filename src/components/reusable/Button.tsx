import React from "react";

interface IButton {
  label: string;
  type: "button" | "submit" | "reset";
  className: string;
  disable: boolean;
  handleClick?: () => void;
}

const Button: React.FC<IButton> = (props) => {
  const { label, type, className, disable = false, handleClick } = props;
  return (
    <>
      <button
        type={type}
        className={className}
        onClick={handleClick}
        disabled={disable}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
