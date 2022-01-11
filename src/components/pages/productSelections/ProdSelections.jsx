import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./ProdSelections.scss";

function ProdSelections({ slideContent, colNum, centerContent }) {
  const [translate, setTranslate] = useState(0);
  const [prvBtnVisibility, setPrvBtnVisibility] = useState("hidden");
  const [prvBtnEvents, setPrvBtnEvents] = useState("none");

  const sliderStyles = {
    gridTemplateColumns: `repeat(${colNum}, 104px)`,
    placeContent: centerContent,
  };
  const slideTranslate = {
    transform: `translateX(${translate}%)`,
  };

  const prvBtnStyles = {
    visibility: prvBtnVisibility,
    pointerEvents: prvBtnEvents,
  };

  const handlePrvClick = () => {
    setTranslate(translate + 300);
    if(translate == -300){
      setTranslate(0)
      setPrvBtnVisibility('hidden')
      setPrvBtnEvents('none')
    }
    console.log(translate)
  };
  const handleNxtClick = () => {
    setTranslate(translate - 300);
    setPrvBtnEvents("initial");
    setPrvBtnVisibility("visible");
    if (translate <= -150) {
      console.log("stop");
    }
  };

  return (
    <div className="productSlider">
      <FontAwesomeIcon
        className="sliderBtn"
        onClick={handlePrvClick}
        icon={faChevronLeft}
        style={prvBtnStyles}
      />
      <div className="slider" style={sliderStyles}>
        {slideContent.map((slide) => (
          <div className="slide" key={slide.itemId} style={slideTranslate}>
            <img src={slide.imgSrc} alt="" />
            <p>{slide.productName}</p>
          </div>
        ))}
      </div>
      <FontAwesomeIcon
        className="sliderBtn"
        onClick={handleNxtClick}
        icon={faChevronRight}
      />
    </div>
  );
}

export default ProdSelections;
