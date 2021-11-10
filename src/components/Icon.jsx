import React from "react";

function Icon({ src, alt = "" }) {
  return (
    <div className="icon">
      <img src={require("../res/icons/" + src).default} alt={alt} />
    </div>
  );
}

export default Icon;
