import React from "react";
import marketMeAboutImage from "./MarketMe/images/about-marketme.jpg";

const MainSecond = () => {
  return (
    <section className="main-second">
      <div className="main-second-overlay">
        <article className="market-me-about">
          <div className="about-text">
            <div className="header-about">
              <h2>welcome</h2>
              <div className="header-underline"></div>
            </div>
            <div className="about-text-para">
              MarketMe Jamaica is a fully integrated communications agency with
              a team of fun, talented and creative minds.
            </div>
          </div>
          <div className="market-me-image">
            <img
              // style={{ height: "300px" }}
              src={marketMeAboutImage}
              alt="Market-Me-About-Image"
            />
          </div>
        </article>
      </div>
    </section>
  );
};

export default MainSecond;
