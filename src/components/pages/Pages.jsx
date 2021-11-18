import React from "react";
import { Outlet } from "react-router";
import { Footer, Header } from "..";
import ProdSelections from "./productSelections/ProdSelections";

function Pages() {
  return (
    <div>
      <Header homeHeader="current" />
      <ProdSelections />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Pages;
