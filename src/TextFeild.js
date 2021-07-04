/* eslint-disable no-unused-vars */
import React from "react";
import { ErrorMessage, useField } from "formik";
const TextFeild = ({ handleSubmit, label, ...props }) => {
  const [field, meta] = useField(label);
  return (
    <>
      <div className={field.name}>
        <label htmlFor={field.name}>{label}:</label>
        <input {...field} {...props} placeholder={`enter ${field.name}`} />
        <span className="error-message">
          <ErrorMessage name={field.name} />
        </span>
      </div>
      {/* <div className="email">
        <label htmlFor="email">Email:</label>
        <input type="text" name="email" placeholder="enter email" />
      </div>
      <div className="subject">
        <label htmlFor="subject">Subject:</label>
        <input type="text" name="subject" />
      </div>*/}
    </>
  );
};

export default TextFeild;
