import React from "react";
import "./Store.scss";
import Ribbon from "../ribbon/Ribbon";
import Maintenance from "../404/Maintenance";

function Store({ ribbonText, sectionName }) {
  return (
    <div className="store">
      <Ribbon text={ribbonText} />

      <div className="storeContent"></div>
      <Maintenance />
    </div>
  );
}

export default Store;
