import React from "react";

function ContentBox({ text, items = [] }) {
  return (
    <div className="content-box">
      <h4>{text}</h4>
      <ul>
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
      <div className="rect"></div>
    </div>
  );
}

export default ContentBox;
