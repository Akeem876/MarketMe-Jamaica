import React from "react";

const ContactForm = () => {
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
          <form>
            <div className="name">
              <label htmlFor="name">Name:</label>
              <input type="text" placeholder="enter name" name="name" />
            </div>
            <div className="email">
              <label htmlFor="email">Email:</label>
              <input type="text" name="email" placeholder="enter email" />
            </div>
            <div className="subject">
              <label htmlFor="subject">Subject:</label>
              <input type="text" name="subject" placeholder="enter subject" />
            </div>
            <div className="message">
              <label htmlFor="message">Message:</label>
              <textarea
                name="message"
                placeholder="enter your message"
              ></textarea>
              <input type="submit" value="Send Email" />
            </div>
          </form>
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
