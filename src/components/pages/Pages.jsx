import React, { useRef } from "react";
import "./Pages.scss";
import { Outlet, useLocation } from "react-router";
import { Footer, Header } from "..";
import PagesFooter from "./PagesFooter";
import ProdSelections from "./productSelections/ProdSelections";


function Pages() {
  const pageSect = useRef(null);
  const url = useLocation().pathname.split("/");
  const urlPath = url[url.length - 1];


  return (
    <div ref={pageSect} className="pages">
      <Header homeHeader="current" />
      <Outlet />
      <Footer section={<PagesFooter sectionIndicator={urlPath} />} />
    </div>
  );
}

export default Pages;
