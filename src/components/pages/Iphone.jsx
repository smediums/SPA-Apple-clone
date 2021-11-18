import React from "react";
import Ribbon from "./ribbon/Ribbon";

function Iphone({ ribbonText }) {
  return (
    <div>
      <Ribbon text={ribbonText} />
      <h1>Phone</h1>
    </div>
  );
}

export default Iphone;
