import React, { useState, useEffect } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { NavDiv, IconDiv, IconSpan } from "../MainTags";
import { useLocation } from "react-router-dom";

export default function Icon() {
  const { pathname } = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    function getParametrers() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", getParametrers);
    return () => window.removeEventListener("resize", getParametrers);
  }, []);
  return (
    <NavDiv type={pathname === "/" ? "withdraw" : "deposit"}>
      <div>
        {windowWidth <= 768 && (
          <IconSpan>
            <FavoriteIcon />
            <ShoppingCartIcon />
          </IconSpan>
        )}
      </div>
      {windowWidth >= 768 && (
        <IconDiv>
          <SearchIcon />
          <PersonIcon />
          <FavoriteIcon />
          <ShoppingCartIcon />
        </IconDiv>
      )}
    </NavDiv>
  );
}
