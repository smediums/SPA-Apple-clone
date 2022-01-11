import React, { useEffect, useRef } from "react";
import { useState } from "react";
import ProdSelections from "../productSelections/ProdSelections";
import Ribbon from "../ribbon/Ribbon";
import "./Airpods.scss";

function Airpods({ ribbonText }) {
  const [slides] = useState([
    {
      productName: "AirPods 2nd Generation",
      itemId: "airpodSlide1",
      imgSrc:
        "https://www.apple.com/v/airpods/q/images/chapternav/airpods_2gen_light__ckwbqlgv1r9e_large.svg",
    },
    {
      productName: "AirPods 3rd Generation",
      itemId: "airpodSlide2",
      imgSrc:
        "https://www.apple.com/v/airpods/q/images/chapternav/airpods_3gen_light__6r7zooyk4lua_large.svg",
    },
    {
      productName: "AirPods Pro",
      itemId: "airpodSlide3",
      imgSrc:
        "https://www.apple.com/v/airpods/q/images/chapternav/airpods_pro_light__ets5a19rt3au_large.svg",
    },
    {
      productName: "AirPods Max",
      itemId: "airpodSlide4",
      imgSrc:
        "https://www.apple.com/v/airpods/q/images/chapternav/airpods_max_light__cvaaddhgazqu_large.svg",
    },
    {
      productName: "Compare",
      itemId: "airpodSlide5",
      imgSrc:
        "https://www.apple.com/v/airpods/q/images/chapternav/airpods_compare_light__cmuvdvbxj1w2_large.svg",
    },
    {
      productName: "Apple Music",
      itemId: "airpodSlide6",
      imgSrc:
        "https://www.apple.com/v/airpods/q/images/chapternav/apple_music_light__fexraacz3dme_large.svg",
    },
  ]);
  const [vidSize, setVidSize] = useState("");
  const [playPause, setPlayPause] = useState("pause");
  const video = useRef(null);
  const [airpodTypes, setAirpodTypes] = useState([
    {
      name: "AirPods Pro",
      price: "$249",
      imgSrc: "",
      id: "Pro",
    },
    {
      name: "AirPods Max",
      price: "$549",
      imgSrc:
        "https://www.apple.com/v/airpods/q/images/overview/airpods_max__f265q4g4ddym_large.png",
      id: "Max",
    },
    {
      name: "AirPods",
      price: "$129",
      imgSrc: "",
      id: "Pods2",
    },
  ]);

  // Load video
  useEffect(() => {
    setVidSize(
      "https://www.apple.com/105/media/us/airpods/2021/625e09e3-e26e-49ed-a5ee-6e4eda5d275f/anim/supercut/small_2x.mp4"
    );
  }, []);

  // Play and pause video
  const handlePlay = () => {
    if (playPause === "pause") {
      setPlayPause("play");
      video.current.pause();
    } else {
      setPlayPause("pause");
      video.current.play();
    }
  };

  return (
    <div className="airpodsPage">
      <ProdSelections
        slideContent={slides}
        colNum={slides.length}
        centerContent="center"
      />
      <Ribbon text={ribbonText} />
      <div className="airpodsContent">
        <div className="vidContainer promoCard">
          <figure id="play" onClick={handlePlay}>
            <i className={`fas fa-${playPause}`}></i>
          </figure>
          <div className="vidText">
            <p></p>
            <h3></h3>
          </div>
          <video ref={video} src={vidSize} loop autoPlay></video>
        </div>
        <div className="otherCards">
          {airpodTypes.map((card) => (
            <div className="podType">
              <img src={card.imgSrc} alt="" />
              <div className="textWrapper">
                <h2>{card.name}</h2>
                <p>{card.price}</p>
                <div className="airpodBtns">
                  <button>Buy</button>
                  <button>Learn More</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Airpods;
