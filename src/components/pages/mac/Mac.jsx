import React from "react";
import { useState } from "react";
import Maintenance from "../404/Maintenance";
import ProdSelections from "../productSelections/ProdSelections";
import Ribbon from "../ribbon/Ribbon";

function Mac({ ribbonText }) {
  const [slides] = useState([
    {
      productName: 'MacBook Air',
      itemId: 'macSlide1',
    },
    {
      productName: 'MacBook Pro',
      itemId: 'macSlide2',
    },
    {
      productName: 'iMac',
      itemId: 'macSlide3',
    },
    {
      productName: 'Mac Pro',
      itemId: 'macSlide4',
    },
    {
      productName: 'Mac mini',
      itemId: 'macSlide5',
    },
    {
      productName: 'Compare',
      itemId: 'macSlide6',
    },
    {
      productName: 'Pro Display XDR',
      itemId: 'macSlide7',
    },
    {
      productName: 'Accessories',
      itemId: 'macSlide8',
    },
    {
      productName: 'Monterey',
      itemId: 'macSlide9',
    },
    {
      productName: 'Shop Mac',
      itemId: 'macSlide10',
    },
  ])

  const [columns] = useState(10)

  return (
    <div className="mac">
      <ProdSelections slideContent={slides} colNum={columns} />
      <Ribbon text={ribbonText} />
      <Maintenance />

      {/* Slider Svg 
      
        system: https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Icon_Mac_Pro.svg/1200px-Icon_Mac_Pro.svg.png

        macbook pro: https://cdn.freebiesupply.com/logos/thumbs/2x/apple-macbook-pro-logo.png


        imac: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDiZN0I2ZWq0I1ndh4fj3dxc11VvqX77OdXg&usqp=CAU

        pro display: https://support.apple.com/content/dam/edam/applecare/images/en_US/psp/macfamily-productnav-icon-pro-xdr-display_2x.png

        collection: https://i.pinimg.com/originals/d3/33/79/d3337924622a5887add57877e9af8cb1.jpg

        
      */}
    </div>
  );
}

export default Mac;
