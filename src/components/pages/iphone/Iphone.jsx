import React from "react";
import { useState } from "react";
import Maintenance from "../404/Maintenance";
import ProdSelections from '../productSelections/ProdSelections'
import Ribbon from "../ribbon/Ribbon";

function Iphone({ ribbonText }) {

  const [slides] = useState([
    {
      productName: "iPhone 13 Pro",
      itemId: "iphoneSlide1",
    },
    {
      productName: "iPhone 13",
      itemId: "iphoneSlide2",
    },
    {
      productName: "iPhone 12",
      itemId: "iphoneSlide3",
    },
    {
      productName: "iPhone SE",
      itemId: "iphoneSlide4",
    },
    {
      productName: "iPhone 11",
      itemId: "iphoneSlide5",
    },
    {
      productName: "Compare",
      itemId: "iphoneSlide6",
    },
    {
      productName: "AirTag",
      itemId: "iphoneSlide7",
    },
    {
      productName: "Accessories",
      itemId: "iphoneSlide8",
    },
    {
      productName: "Apple Card",
      itemId: "iphoneSlide9",
    },
    {
      productName: "Shop iPhone",
      itemId: "iphoneSlide10",
    },
  ]);
  const [columns] = useState(10)

  return (
    <div>
      <ProdSelections slideContent={slides} colNum={columns} />
      <Ribbon text={ribbonText} />
      <Maintenance />
    </div>
  );
}

export default Iphone;
