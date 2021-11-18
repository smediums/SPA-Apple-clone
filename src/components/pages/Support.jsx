import React from "react";
import Ribbon from "./ribbon/Ribbon";

function Support({ ribbonText }) {
  return (
    <div>
      <Ribbon text={ribbonText} />
      <h1>Support</h1>
    </div>
  );
}

export default Support;
