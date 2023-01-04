import React, { useState, useEffect } from "react";
import slideItems from "./homeSlide.json";
import slideItems2 from "./homeSlide2.json";
import {
  CategoriesH2,
  SlideParent,
  SlideParentDiv,
  SlideParentP,
  BtnNext,
} from "../../../MainTags";
import BtnSlider from "./BtnSlider";

export default function Categories() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(false);
  const [slideIndex, setSlideIndex] = useState(0);
  const [length, setLength] = useState(slideItems.length);
  const show = 4;

  useEffect(() => {
    function getParametrers() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", getParametrers);
    return () => window.removeEventListener("resize", getParametrers);
  }, []);
  const handleNext = () => {
    if (slideIndex < length - show) {
      setSlideIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    }
  };
  const renderImages = () => {
    const startIndex = slideIndex;
    const endIndex = startIndex + 4;
    const arr = Object.values(slideItems);
    const visibleImages = arr.slice(startIndex, endIndex);

    return (
      (display || windowWidth >= 768) &&
      visibleImages.map((item) => (
        <SlideParentDiv key={item.id}>
          <img src={require(`${item.img}`)} alt="" />
          <SlideParentP>{item.name}</SlideParentP>
        </SlideParentDiv>
      ))
    );
  };
  const renderImagesMobile = () => {
    const startIndex = slideIndex;
    const endIndex = startIndex + 2;
    const arr = Object.values(slideItems2);
    const visibleImages = arr.slice(startIndex, endIndex);

    return (
      windowWidth <= 768 &&
      visibleImages.map((item) => (
        <SlideParentDiv key={item.id}>
          <img src={require(`${item.img}`)} alt="" />
          <SlideParentP>{item.name}</SlideParentP>
        </SlideParentDiv>
      ))
    );
  };
  return (
    <div>
      <CategoriesH2>Категории</CategoriesH2>
      <BtnNext>
        <BtnSlider moveNext={handleNext} direction={"next"} />
      </BtnNext>
      <div>
        <BtnSlider movePrev={handlePrevious} direction={"prev"} />
      </div>
      <SlideParent>{renderImagesMobile()}</SlideParent>
      <SlideParent>{renderImages()}</SlideParent>
    </div>
  );
}