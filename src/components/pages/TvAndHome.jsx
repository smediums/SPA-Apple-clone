import React from "react";
import Ribbon from "./ribbon/Ribbon";

function TvAndHome({ ribbonText }) {
  return (
    <div>
      <Ribbon text={ribbonText} />
      <h1>Tv</h1>
    </div>
  );
}

export default TvAndHome;
