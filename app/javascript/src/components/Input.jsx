import React from "react";

import classnames from "classnames";
import PropTypes from "prop-types";

const Input = ({
  type = "text",
  label,
  value,
  onChange,
  min,
  max,
  placeholder,
  disabled = false,
  required = true,
  className = "",
}) => {
  return (
    <div className="mt-6">
      {label && (
        <label className="block text-sm font-medium leading-5 text-bb-gray-700">
          {label}
        </label>
      )}
      <div className="mt-1 rounded-md shadow-sm">
        <input
          type={type}
          required={required}
          value={value}
          onChange={onChange}
          min={min}
          max={max}
          placeholder={placeholder}
          disabled={disabled}
          className={classnames(
            "block px-3 py-2 w-full placeholder-gray-400 rounded-md border border-gray-300 transition duration-150 ease-in-out appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5",
            [className]
          )}
        />
      </div>
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.node,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
};

export default Input;
