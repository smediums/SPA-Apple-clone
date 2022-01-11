import { faApple } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import useFixedPos from "../useFixedPos";
import "./Header.scss";

function Header({ pos, homeHeader }) {
  const [showNav, setShowNav] = useState(false);
  const [searching, setSearching] = useState(false);

  const fixed = useFixedPos(pos);

  return (
    // Header
    <header
      className={`header ${showNav && "showNav"} ${searching && "searching"} `}
      style={fixed}
    >
      <div className="headerContent">
        {/* Nav start */}
        <Link className="logo" to="/">
          <FontAwesomeIcon icon={faApple} />
        </Link>

        {/* Menu Toggle */}
        <div className="hamburgMenu" onClick={() => setShowNav(!showNav)}>
          <span className="line"></span>
          <span className="line"></span>
        </div>

        {/* Search Icon at Screen break */}
        <div className="magnifyGlass">
          <div className="magnify"></div>
        </div>

        {/* Bag icon */}
        <div className="bag">
          <div className="square"></div>
          <div className="semiCir"></div>
        </div>
      </div>

      {/* Mobile nav */}
      <nav className="headerNav">
        {/* Nav for Search box click event */}
        <ul className="quickLinks">
          <h5>Quick Links</h5>
          <NavLink className="quickLink" to="/">
            Holiday Gifts
          </NavLink>
          <NavLink className="quickLink" to="/">
            Visiting an Apple Store FAQ
          </NavLink>
          <NavLink className="quickLink" to="/">
            AirPods
          </NavLink>
          <NavLink className="quickLink" to="/">
            AirTag
          </NavLink>
          <NavLink className="quickLink" to="/">
            Gift Cards
          </NavLink>
        </ul>

        {/* Default nav */}
        <ul className="navLinks">
          <NavLink
            className="navLink"
            to={`${homeHeader === "current" ? "" : homeHeader}store`}
          >
            <span>Store</span>
          </NavLink>
          <NavLink
            className="navLink"
            to={`${homeHeader === "current" ? "" : homeHeader}mac`}
          >
            <span>Mac</span>
          </NavLink>
          <NavLink
            className="navLink"
            to={`${homeHeader === "current" ? "" : homeHeader}iPad`}
          >
            <span>iPad</span>
          </NavLink>
          <NavLink
            className="navLink"
            to={`${homeHeader === "current" ? "" : homeHeader}iPhone`}
          >
            <span>iPhone</span>
          </NavLink>
          <NavLink
            className="navLink"
            to={`${homeHeader === "current" ? "" : homeHeader}watch`}
          >
            <span>Watch</span>
          </NavLink>
          <NavLink
            className="navLink"
            to={`${homeHeader === "current" ? "" : homeHeader}airpods`}
          >
            <span>AirPods</span>
          </NavLink>
          <NavLink
            className="navLink"
            to={`${homeHeader === "current" ? "" : homeHeader}tvAndHome`}
          >
            <span>TV & Home</span>
          </NavLink>
          <NavLink
            className="navLink"
            to={`${homeHeader === "current" ? "" : homeHeader}onlyApple`}
          >
            <span>Only on Apple</span>
          </NavLink>
          <NavLink
            className="navLink"
            to={`${homeHeader === "current" ? "" : homeHeader}accessories`}
          >
            <span>Accessories</span>
          </NavLink>
          <NavLink
            className="navLink"
            to={`${homeHeader === "current" ? "" : homeHeader}support`}
          >
            <span>Support</span>
          </NavLink>
        </ul>
      </nav>

      {/* Search box */}
      <p className="cancelSearch" onClick={() => setSearching(false)}>
        Cancel
      </p>
      <label className="search">
        <div className="searchIcon">
          <div className="magnify"></div>
        </div>
        <input
          type="text"
          name="search"
          placeholder="Search apple.com"
          onFocus={() => setSearching(true)}
        />
      </label>
    </header>
  );
}

export default Header;
