import React from "react";
import "./Button.css";

const Button = ({ handleClick, children, disabled }) => {
  return (
  <button
      className={disabled  ? "disabled-button" : "reusable-button"}
      onClick={handleClick}
      type="button"
    >
      {children}
    </button>
  );
};

export default React.memo(Button);
