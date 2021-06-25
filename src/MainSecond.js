import React from "react";
import marketMeAboutImage from "./MarketMe/images/about-marketme.jpg";

const MainSecond = () => {
  return (
    <section className="main-second">
      <article className="market-me-about">
        <div className="about-text">
          MarketMe Jamaica is a fully integrated communications agency with a
          team of fun, talented and creative minds.
        </div>
        <div className="market-me-image">
          <img
            style={{ height: "261px" }}
            src={marketMeAboutImage}
            alt="Market-Me-About-Image"
          />
        </div>
      </article>
    </section>
  );
};

export default MainSecond;
