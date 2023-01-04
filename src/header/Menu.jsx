import React from "react";
import Menu1 from "./Menu1.png";
import Menu2 from "./Menu2.png";
import Menu3 from "./Menu3.png";
import Menu4 from "./Menu4.png";
import Menu5 from "./Menu5.png";
import Menu6 from "./Menu6.png";
import { MenuDiv } from "../MainTags";
import { useLocation } from "react-router-dom";

export default function Menu() {
  const { pathname } = useLocation();

  return (
    <div>
      {pathname === "/" ? (
        <MenuDiv>
          {" "}
          <img src={Menu5} alt="" />
          <img src={Menu4} alt="" />
          <img src={Menu6} alt="" />
        </MenuDiv>
      ) : (
        <MenuDiv>
          <img src={Menu1} alt="" />
          <img src={Menu2} alt="" />
          <img src={Menu3} alt="" />
        </MenuDiv>
      )}
    </div>
  );
}
