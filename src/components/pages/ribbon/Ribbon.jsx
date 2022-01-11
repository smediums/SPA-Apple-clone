import React from "react";
import "./Ribbon.scss";

function Ribbon({ text }) {
  return (
    <article className="ribbon">
      <div>{text}</div>
    </article>
  );
}

export default Ribbon;
