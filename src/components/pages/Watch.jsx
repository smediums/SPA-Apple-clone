import React from "react";
import Ribbon from "./ribbon/Ribbon";

function Watch({ ribbonText }) {
  return (
    <div>
      <Ribbon text={ribbonText} />
      <h1>Watch</h1>
    </div>
  );
}

export default Watch;
