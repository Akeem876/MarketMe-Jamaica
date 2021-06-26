import clients from "./MarketMe/images/client-frame-for-react.png";
import React from "react";

const OurClient = () => {
  return (
    <article className="our-client">
      <div className="our-client-header">
        <h2>our clients</h2>
        <div className="our-work-underline"></div>
      </div>
      <div className="client-list">
        <img src={clients} alt="" />
      </div>
    </article>
  );
};
export default OurClient;
