import React from "react";
import Icon from "../components/Icon";
const SocialItem = ({ img, link }) => {
  return (
    <a href={link} className="social-link">
      <Icon src={img} />
    </a>
  );
};

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__actor">Design by Tristin Tran</p>
        <div className="footer__social">
          <p className="text">Contact me</p>
          <SocialItem link="/" img="facebook.png" />
          <SocialItem link="/" img="gmail.png" />
          <SocialItem link="/" img="instagram.png" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
