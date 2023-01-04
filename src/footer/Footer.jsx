import React, { useState, useEffect } from "react";
import footerItems from "./footMenu.json";
import { NavLink } from "react-router-dom";
import {
  FooterSection,
  FooterLi,
  FooterFirstChild,
  FooterChild,
  FooterH2,
  FooterUl,
  FooterP,
} from "../MainTags";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";


export default function Footer() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [id, setId] = useState(null);
  useEffect(() => {
    function getParametrers() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", getParametrers);
    return () => window.removeEventListener("resize", getParametrers);
  }, []);
  const handleToggle = (index) => {
    if (id === index) {
      return setId(null);
    }
    setId(index);
  };
  return (
    <FooterSection>
      <FooterFirstChild>
        {footerItems.map((item, index) => (
          <FooterChild key={item.id}>
            <FooterUl>
              <li>
                <FooterH2>
                  {item.headName}
                  {windowWidth <= 768 && (
                    <span onClick={() => handleToggle(index)}>
                      <KeyboardArrowDownIcon />
                    </span>
                  )}
                </FooterH2>
              </li>
              {(id === index || windowWidth >= 768) &&
                item.a1.map((item) => (
                  <FooterLi key={item.id}>
                    {item?.path && item?.name ? (
                      <NavLink to={item?.path} key={item.id}>
                        {item?.name}
                      </NavLink>
                    ) : item?.path_link && item?.name ? (
                      <a key={item.id} href={item.path_link}>
                        {item.name}
                      </a>
                    ) : (
                      item.links.map((link) => (
                        <a key={link.id} href={link.path_link}>
                          <img src={require(`${link.img}`)} alt="" />
                        </a>
                      ))
                    )}
                  </FooterLi>
                ))}
            </FooterUl>
          </FooterChild>
        ))}
      </FooterFirstChild>
      <FooterP>©️ 2021 Yanki. All rights reserved</FooterP>
    </FooterSection>
  );
}
