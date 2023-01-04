import React, { useState, useEffect } from "react";
import homeImg from "./images.json";
import { SectionImg, SectionImgDiv, ImgMobile } from "../../../MainTags";
import imgs from "./Yanki1.png";

export default function HomeImg() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    function getParametrers() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", getParametrers);
    return () => window.removeEventListener("resize", getParametrers);
  }, []);
  return (
    <SectionImg>
      <ImgMobile>
        {windowWidth <= 768 && (
          <span onClick={() => setDisplay(!display)}>
            <img src={imgs} alt="" />
          </span>
        )}
      </ImgMobile>
      {(display || windowWidth >= 768) &&
        homeImg.map((item) => (
          <SectionImgDiv key={item.id}>
            <img src={require(`${item.img}`)} alt="" />
          </SectionImgDiv>
        ))}
    </SectionImg>
  );
}
