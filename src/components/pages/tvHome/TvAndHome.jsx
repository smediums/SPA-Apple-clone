import React from "react";
import Maintenance from "../404/Maintenance";
import Ribbon from "../ribbon/Ribbon";

function TvAndHome({ ribbonText }) {
  return (
    <div>
      <Ribbon text={ribbonText} />
      <Maintenance />
    </div>
  );
}

export default TvAndHome;
