import React from "react";
import Image from "../components/Image";

function Jumbotron({ content }) {
  return (
    <div className="jumbotron">
      <div className="jumbotron__left">
        <h3 className="jumbotron__left__caption">{content.caption}</h3>
        <p className="jumbotron__left__subcaption">{content.subcaption}</p>
        <div className="jumbotron__left__quote">{content.quote}</div>
      </div>
      <div className="jumbotron__right">
        <div className="jumbotron__right__preview">
          <Image src={content.img} />
        </div>
        <div className="rect"></div>
      </div>
      {/* Mobile display  */}
      <div className="jumbotron__right--mobile">
        <div className="jumbotron__right__preview">
          <Image src={content.imgMobile} />
        </div>
        <div className="rect"></div>
      </div>
    </div>
  );
}

export default Jumbotron;
