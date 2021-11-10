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
          <SocialItem
            link="https://www.facebook.com/minhquoc.tran.9828"
            img="facebook.png"
          />
          <SocialItem
            link="mailto:ts4blader@gmail.com?subject=Mail from My Portfolio"
            img="gmail.png"
          />
          <SocialItem
            link="https://www.instagram.com/ts4blader/"
            img="instagram.png"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
