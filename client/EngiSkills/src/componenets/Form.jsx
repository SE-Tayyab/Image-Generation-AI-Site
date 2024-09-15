import React from 'react';
import { darkGray, brightBlue } from '../constents/colors';
import Loader from './Loader';

function Form({
  LabelName,
  value,
  type = "text",
  name,
  placeholder,
  handleChange,
  isSurprisMe = false,
  handleSurpriseMe
}) {
  return (
    <>
      <div className="mb-4">
        <div className="flex items-center gap-3 mb-2">
          <label
            htmlFor={name}
            className="block text-sm font-medium"
            style={{ color: darkGray }}
          >
            {LabelName}
          </label>
          {isSurprisMe && (
            <button
              type="button"
              onClick={handleSurpriseMe}
              className="font-semibold text-xs py-1 px-3 rounded-md text-white hover:bg-blue-600 transition duration-200"
              style={{ backgroundColor: brightBlue }}
            >
              Surprise Me
            </button>
          )}
        </div>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        
      </div>
    </>


  );

}

export default Form;
