import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

const Button = ({ variant, size, color, label, handleClick, ...props }) => {
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const colorClass = `btn-${color}`;

  return (
    <button
      onClick={handleClick}
      className={`btn ${variantClass} ${sizeClass} ${colorClass}`}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "secondary", "text"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["blue", "red", "green"]),
  label: PropTypes.string,
  handleClick: PropTypes.func,
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
  color: "blue",
};

export default Button;
