import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="footer bg-black text-white">
        <div className="degiency">
          <h4 className="footer-main">
            <span className="text-orange">Digie</span>ncy
          </h4>
          <p className="footer-child">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis,
            cursus egestas etiam posuere vitae cursus consectetur eu. Cursus
            vitae porttitor libero est posuere.
          </p>
        </div>
        <div className="company">
          <h4 className="footer-main">Company</h4>
          <p type="H7" className="footer-child">
            About Us
          </p>
          <p type="H7" className="footer-child">
            Our Work
          </p>
          <p type="H7" className="footer-child">
            Client
          </p>
          <p type="H7" className="footer-child">
            Our Blog
          </p>
          <p type="H7" className="footer-child">
            Contact US
          </p>
        </div>
        <div className="services">
          <h4 type="H2" className="footer-main">
            Services
          </h4>
          <p type="H7" className="footer-child">
            Graphic Design
          </p>
          <p type="H7" className="footer-child">
            UI/UX Design
          </p>
          <p type="H7" className="footer-child">
            Web Development
          </p>
          <p type="H7" className="footer-child">
            App Development
          </p>
          <p type="H7" className="footer-child">
            Web Hosting
          </p>
        </div>
        <div className="newsletter">
          <h4 type="H2" className="footer-main">
            Newsletter
          </h4>
          <p type="H7" className="footer-child">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu
            feugiat in mollis augue vel aliquam. Ut faucibus elit, libero
            varius.{" "}
          </p>
          <div className="inputbox">
            <input
              type="text"
              placeholder="info@gmail.com"
              className="inputimg"
            />
            <button alt="" className="input-box-img">
              Send
            </button>
          </div>
        </div>
      </div>
      <div className="downfooter">
        <p type="H7">@ Copyright 2021. All Right Reserved By BishnuFashion</p>
      </div>
    </>
  );
};

export default Footer;
