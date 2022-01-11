import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function PagesFooter({ sectionIndicator }) {
  return (
    <div className="pageIndicator">
      <Link to="/">
        <FontAwesomeIcon icon={faApple} className="footerLogo" />
      </Link>
      <p>|</p>
      <p className="sectionName">{sectionIndicator}</p>
    </div>
  );
}

export default PagesFooter;
