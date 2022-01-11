import React from "react";
import Ribbon from "../ribbon/Ribbon";
import Maintenance from "../404/Maintenance";
import ProdSelections from "../productSelections/ProdSelections";
import { useState } from "react";

function Ipad({ ribbonText }) {

  const [slides] = useState([
    {
      productName: "iPad Pro",
      itemId: "ipadSlide1",
    },
    {
      productName: "iPad Air",
      itemId: "ipadSlide2",
    },
    {
      productName: "iPad",
      itemId: "ipadSlide3",
    },
    {
      productName: "iPad mini",
      itemId: "ipadSlide4",
    },
    {
      productName: "Apple Pencil",
      itemId: "ipadSlide5",
    },
    {
      productName: "Keyboards",
      itemId: "ipadSlide6",
    },
    {
      productName: "iPadOS",
      itemId: "ipadSlide7",
    },
    {
      productName: "Accessories",
      itemId: "ipadSlide8",
    },
    {
      productName: "Compare",
      itemId: "ipadSlide9",
    },
    {
      productName: "Shop iPad",
      itemId: "ipadSlide10",
    },
  ]);

  const [columns] = useState(10)

  return (
    <div className="ipad">
      <ProdSelections slideContent={slides} colNum={columns} />
      <Ribbon text={ribbonText} />
      <Maintenance />
    </div>
  );
}

export default Ipad;
