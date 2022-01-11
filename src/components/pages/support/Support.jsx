import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Support.scss";

function Support() {
  const [heroImg, setHeroImg] = useState("small");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 864) {
        setHeroImg("large");
      } else {
        setHeroImg(heroImg);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="support">
      <div className="banner">
        <h2 className="tabPlusHeading">Apple Support</h2>
        <img
          src={`https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/psp-hero-banner-homepage-welcome.image.${heroImg}_2x.jpg`}
          alt="Woman looking at iPad"
        />
      </div>
      <h1 className="mobileHeading">Apple Support</h1>
      <div className="categories">
        <Link to="/" className="outline">
          <img
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_iphone_family_2x.png"
            alt="iPhone Outline"
          />
          <p></p>
        </Link>
        <Link to="/" className="outline">
          <img
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_imac_family_2x.png"
            alt="iMac Outline"
          />
          <p></p>
        </Link>
        <Link to="/" className="outline">
          <img
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_ipad_family_2x.png"
            alt="iPad Outline"
          />
          <p></p>
        </Link>
        <Link to="/" className="outline">
          <img
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productnav_apple_watch_2x.png"
            alt="Apple Watch Outline"
          />
          <p></p>
        </Link>
        <Link to="/" className="outline">
          <img
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage-productdrawer-airpods-dark_2x.png"
            alt="Airpods Outline"
          />
          <p></p>
        </Link>
        <Link to="/" className="outline">
          <img
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/homepage/homepage_productdrawer_applemusic_2x.png"
            alt="Apple Music Outline"
          />
          <p></p>
        </Link>
        <Link to="/" className="outline">
          <img
            src="https://support.apple.com/content/dam/edam/applecare/images/en_US/promo_icons/homepage-productdrawer-appletv_2x.png"
            alt="Apple Tv Outline"
          />
          <p></p>
        </Link>
      </div>
      <div className="types">
        
      </div>
    </div>
  );
}

export default Support;
