import React from "react";
import "./Ribbon.scss";

function Ribbon({ text }) {
  return (
    <article className="ribbon">
      <p>{text}</p>
    </article>
  );
}

export default Ribbon;
