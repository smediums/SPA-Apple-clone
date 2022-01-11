import React, { useEffect, useState } from "react";
import "./Home.scss";
import { Header } from "..";
import Ribbon from "../pages/ribbon/Ribbon";
import AirpodCir from "./imgs/airpods.png";
import MacBookCir from "./imgs/macbook.png";
import iPhone13 from "./imgs/iphone13.png";
import Airpods from "./imgs/airpodLg.png";
import GreenWatch from "./imgs/greenWatch.png";
import iPhonePink from "./imgs/pinkIphone13.png";
import iPhoneCir from "./imgs/iphones.png";
import Shrink from "./imgs/shrink.png";
import ItemContent from "./ItemContent";
import HomeFooter from "./HomeFooter";
import Footer from "../footer/Footer";

function Home({ ribbonText }) {
  const appleLogo =
    "https://www.un.org/sites/un2.un.org/files/apple_logo_black.svg";

  //Animated img container background
  const [heroBckGrd, setHeroBckGrd] = useState("#fbedf9");
  const heroBg = {
    background: heroBckGrd,
  };

  // Animated hero img objects
  const heroImg = [
    { altText: "Circle of Airpods", imgSrc: `${AirpodCir}`, id: 1 },
    { altText: "Circle of Macbooks", imgSrc: `${MacBookCir}`, id: 2 },
    { altText: "Circle of iPhones", imgSrc: `${iPhoneCir}`, id: 3 },
  ];

  const [curHeroImg, setCurHeroImg] = useState(0);

  // Return random img & specific bg color on each render
  useEffect(() => {
    const randomImg = () => {
      const length = heroImg.length;
      setCurHeroImg(Math.floor(Math.random() * length));
    };
    randomImg();
    if (curHeroImg === 1) {
      setHeroBckGrd("#EAF2FC");
    }
  }, [curHeroImg, heroImg.length]);

  return (
    <div className="home">
      <Header pos="fixed" homeHeader="pages/" />

      {/* Main content */}
      <main className="homeMain">
        <Ribbon text={ribbonText} />

        {/* Content begins */}
        <div className="homeContent">
          <div className="itemContainer" style={heroBg}>
            <img
              className="homeLogo"
              src="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/obdb-holiday-logo-202011_FMT_WHH?wid=142&hei=174&fmt=png-alpha&.v=1605029783000"
              alt="Apple holiday logo"
            />
            {heroImg && (
              <ItemContent
                srcImg={heroImg[curHeroImg].imgSrc}
                imgAlt={heroImg.altText}
                ctaText="Shop gifts"
                cta2="none"
                heading="Let the holidays be for everyone."
              />
            )}
          </div>
          <div className="itemContainer">
            <ItemContent
              srcImg={iPhone13}
              imgAlt="Blue iPhone 13"
              ctaText="Learn more"
              cta2="inline-block"
              cta2Text="Buy"
              heading="iPhone 13 Pro"
              phrase="Oh. So. Pro."
            />
          </div>
          <div className="itemContainer">
            <ItemContent
              srcImg={iPhonePink}
              imgAlt="Pink iPhone 13"
              ctaText="Learn more"
              cta2="inline-block"
              cta2Text="Buy"
              heading="iPhone 13"
              phrase="Your new superpower."
            />
          </div>
          <div className="itemContainer">
            <ItemContent
              srcImg="https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202110160232"
              imgAlt="Blue iPhone 13"
              ctaText="Learn more"
              cta2="inline-block"
              cta2Text="Buy"
              heading="MacBook Pro"
              phrase="Supercharged for pros."
            />

            <ItemContent
              srcImg={Airpods}
              imgAlt="AirPods"
              ctaText="Learn more"
              cta2="inline-block"
              cta2Text="Buy"
              heading="AirPods"
              phrase="All-new with Spatial Audio"
            />

            <ItemContent
              srcImg="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/homepod-mini-select-ani-last-202110?wid=1080&hei=1060&fmt=jpeg&qlt=80&.v=1633600718000"
              imgAlt="Apple speaker"
              ctaText="Learn more"
              cta2="inline-block"
              cta2Text="Buy"
              heading="HomePod mini"
            />
            <ItemContent
              srcImg={GreenWatch}
              imgAlt="Apple watch"
              ctaText="Learn more"
              cta2="inline-block"
              cta2Text="Buy"
              heading={`WATCH`}
              phrase="Introducing our largest display yet."
            />
            <ItemContent
              srcImg="https://fdn.gsmarena.com/imgroot/news/19/11/apple-card-credit-scandal-goldman-sachs-statement/-1200/gsmarena_002.jpg
              "
              imgAlt="Apple card"
              ctaText="Learn more"
              cta2="inline-block"
              cta2Text="Apply Now"
              heading={`Card`}
              phrase="Get up to 3% Daily Cash back with every purchase."
            />
            <ItemContent
              srcImg={Shrink}
              imgAlt="Apple Tv original movie"
              ctaText="Stream now"
              cta2="none"
            />
          </div>
        </div>
      </main>
      <Footer section={<HomeFooter />} />
    </div>
  );
}

export default Home;
