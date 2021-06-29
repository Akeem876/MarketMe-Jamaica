/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { service } from "./our-services-resources";

const OurServices = () => {
  const [services, setServices] = useState(service);
  return (
    <article className="our-services">
      <div className="our-services-header">
        <div className="our-services-overlay">
          <div className="serv-head">
            <h2>our services</h2>
            <div className="our-services-underline"></div>
          </div>
        </div>
      </div>
      <div className="section-service">
        {services.map((service, indexOf) => {
          const { name, image, desc } = service;
          return (
            <article className="our-services-main" key={indexOf}>
              <div className="img-cont">
                <img style={{ height: "200px" }} src={image} alt="" />
              </div>
              <div className="services-text">
                <div className="title-service">
                  <h4>{name}</h4>
                </div>
                <div className="service-para">
                  <p>{desc}</p>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </article>
  );
};
export default OurServices;
