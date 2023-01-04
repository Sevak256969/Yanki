import React from "react";
import leftArrow from "./left.png";
import rightArrow from "./right.png";
import {SlideButton,SlideButtonNext} from "../../../MainTags";

export default function BtnSlider({ direction, movePrev, moveNext }) {
  return (
    <div>
      {direction === "prev" ? (
        <SlideButton onClick={movePrev}>
          <img src={leftArrow}></img>
        </SlideButton>
      ) : (
        <SlideButtonNext onClick={moveNext}>
          <img src={rightArrow}></img>
        </SlideButtonNext>
      )}
    </div>
  );
}
// import React from "react";
// import "./Slider.css";
// import leftArrow from "./left.png";
// import rightArrow from "./right.png";

// export default function BtnSlider({ direction, moveSlide }) {
//   return (
//     <SlideButton
//       onClick={moveSlide}
//       className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
//     >
//       <img src={direction === "next" ? rightArrow : leftArrow} alt="" />
//     </SlideButton>
//   );
// }
