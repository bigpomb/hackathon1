import React from "react";
import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-icons">
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span>Partners</span>
          <span>Help</span>
          <span>Share</span>
          <span>Careers</span>
          <span>Learn More</span>
          <span>Work With Us</span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>123 Fake St</span>
          <span>Toronto, ON</span>
          <span>contact@finnadoctor.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
