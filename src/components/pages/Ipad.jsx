import React from 'react'
import Ribbon from "./ribbon/Ribbon";

function Ipad({ ribbonText }) {
  return (
    <div>
      <Ribbon text={ribbonText} />
      <h1>Pad</h1>
    </div>
  );
}

export default Ipad
