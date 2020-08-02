import React from "react";

interface IButton {
  label: string;
  type: "button" | "submit" | "reset";
  className: string;
  disable?: boolean;
  handleClick?: () => void;
}

const Button: React.FC<IButton> = (props) => {
  const { label, type, className, disable, handleClick } = props;
  return (
    <button
      data-testid="button"
      type={type}
      className={className}
      onClick={handleClick}
      disabled={disable}
    >
      {label}
    </button>
  );
};

export default Button;
