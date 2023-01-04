import React from "react";
import logo from "./YANKI.png";
import logo1 from "./YANKICat.png";
import { useLocation } from "react-router-dom";

export default function GetFinder() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/" ? (
        <img src={logo} alt="" />
      ) : (
        <img src={logo1} alt="" />
      )}
    </div>
  );
}
