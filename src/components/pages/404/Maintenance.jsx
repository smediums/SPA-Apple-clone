import React from "react";
import "./Maintenance.scss";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faApple } from "@fortawesome/free-brands-svg-icons";

function Maintenance() {
  return (
    <div className="maintenance">
      <div className="container">
        <h2>Sorry, this page is under maintenance.</h2>
        <label>
          <FontAwesomeIcon className="icon404" icon={faSearch} />
          <input
            list="404Links"
            name="404Search"
            placeholder="Search apple.com"
          />
        </label>
        <datalist id="404Links">
          <option value="Store"></option>
          <option value="Mac"></option>
          <option value="iPad"></option>
          <option value="iPhone"></option>
          <option value="Watch"></option>
          <option value="Airpods"></option>
          <option value="Tv & Home"></option>
          <option value="Only on Apple"></option>
          <option value="Accessories"></option>
          <option value="Support"></option>
        </datalist>
        <FontAwesomeIcon className="logo" icon={faApple} />
        <Link className="backHome" to="/">Or return home</Link>
      </div>
    </div>
  );
}

export default Maintenance;
