import React from "react";

function Image({ src, alt = "" }) {
  return (
    <div className="img">
      <img src={require("../res/images/" + src).default} alt={alt} />
    </div>
  );
}

export default Image;
