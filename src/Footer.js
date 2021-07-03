import React from "react";

const Footer = () => {
  let thisYear = new Date().getFullYear();
  return (
    <footer>
      <div className="left-side">
        © <span id="date">{thisYear}</span> by Market Me Consulting. All rights
        reserved.
      </div>
      <div className="right-side">
        <p>follow us:</p>
        <div className="brands">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
          <i className="fab fa-youtube"></i>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
