/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import * as yup from "yup";
import { Formik, Form } from "formik";
import TextFeild from "./TextFeild";

const ContactForm = () => {
  const [validate, setValidate] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const userSchema = yup.object().shape({
    name: yup.string().required("required"),
    subject: yup.string().required("required"),
    email: yup.string().email("email is invalid").required("required"),
    message: yup.string(),
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = {
      name: e.target[0].value,
      subject: e.target[1].value,
      email: e.target[2].value,
      message: e.target[3].value,
    };
    const isValid = await userSchema.isValid(formData);
  };

  return (
    <article className="contact-form">
      <div className="contact-form-header" id="contact">
        <h2>get in touch</h2>
        <div className="our-work-underline"></div>
      </div>
      <div className="contact-form-cont">
        <div className="contact-form-para">
          <p>We cannot wait to hear from you.</p>
        </div>
      </div>
      <div className="form-holder">
        <div className="form-left">
          <Formik
            initialValues={{
              name: "",
              subject: "",
              email: "",
              message: "",
            }}
            validationSchema={userSchema}
          >
            {(formik) => (
              <Form>
                <TextFeild
                  handleSubmit={handleSubmit}
                  label="name"
                  name="name"
                  type="text"
                />
                <TextFeild label="email" name="email" type="text" />
                <TextFeild label="subject" name="subject" type="text" />
                <div className="message">
                  <label htmlFor="message">Message:</label>
                  <textarea
                    name="message"
                    placeholder="enter your message"
                  ></textarea>
                  <input type="submit" value="Send Email" />
                </div>
              </Form>
            )}
          </Formik>
        </div>
        <div className="contact-right">
          <div className="upper">
            <p>Unit #3 </p>
            <p>13 West Kings House Road</p>
            <p> Kingston 10, Jamaica</p>
          </div>
          <div className="lower">
            <p>info@marketmeja.com</p>
            <p>876-631-8345</p>
          </div>
        </div>
      </div>
    </article>
  );
};
export default ContactForm;
