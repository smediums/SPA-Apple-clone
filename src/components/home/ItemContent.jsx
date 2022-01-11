import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function ItemContent({
  srcImg,
  imgAlt,
  ctaText,
  cta2,
  cta2Text,
  heading,
  phrase,
}) {
  const ctaDisplay = {
    display: cta2,
  };

  return (
    <div className="theContent">
      <div className="banner">

        <h2>{heading}</h2>

        <p className="phrase">{phrase}</p>

        <div className="ctas">

          <Link className="linkTo" to="/">

            {ctaText}

            <FontAwesomeIcon icon={faChevronRight} id="angleRight" style={ctaDisplay} />

          </Link>

          <Link className="linkTo" to="/" style={ctaDisplay}>
            {cta2Text}
            <FontAwesomeIcon icon={faChevronRight} id="angleRight" />
          </Link>
        </div>
      </div>
      <img src={srcImg} alt={imgAlt} />
    </div>
  );
}

export default ItemContent;
