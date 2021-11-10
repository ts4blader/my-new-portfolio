import React from "react";
import Icon from "../components/Icon";

export function ButtonImg({ img = "" }) {
  return (
    <div className="button">
      <Icon src={img} />
    </div>
  );
}
export function ButtonText({ text = "" }) {
  return (
    <div className="button">
      <p>{text}</p>
    </div>
  );
}
export function Button({ img = "", text = "" }) {
  return (
    <div className="button">
      <Icon src={img} />
      <p>{text}</p>
    </div>
  );
}
