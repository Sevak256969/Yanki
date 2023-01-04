import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ImgDataDiv, ImgItems, ImgDiv, ImgSrtik, Img } from "../../MainTags";
import logo from "./Rectangle 20.png";
import srtik from "./Srtik.png";
import ellipse1 from "./Ellipse 1.png";
import ellipse2 from "./Ellipse 2.png";
import ellipse3 from "./Ellipse 3.png";
import { Context } from "../../hooks/contect";

export default function ImgData() {
  const { state, catalogImg } = useContext(Context);

  console.log(state);
  return (
    <ImgDataDiv>
      {state.length === 0
        ? catalogImg.length &&
          catalogImg.map((item) => (
            <ImgItems key={item.id}>
              <img src={item.img} alt="" />
              <p>{item.size}</p>
              <p>{item.price} грн</p>
              <p>{item.title}</p>
              <ImgSrtik>
                <img src={logo} alt="" />
                <Img src={srtik} alt="" />
              </ImgSrtik>
              <ImgDiv>
                <img src={ellipse1} alt="" />
                <img src={ellipse2} alt="" />
                <img src={ellipse3} alt="" />
              </ImgDiv>
              <Link to={`${item.catalogImg}`}>{item.catalogImg}</Link>
            </ImgItems>
          ))
        : state.map((item) => (
            <ImgItems key={item.id}>
              <img src={item.img} alt="" />
              <p>{item.size}</p>
              <p>{item.price}</p>
              <p>{item.title}</p>
              <ImgSrtik>
                <img src={logo} alt="" />
                <Img src={srtik} alt="" />
              </ImgSrtik>
              <ImgDiv>
                <img src={ellipse1} alt="" />
                <img src={ellipse2} alt="" />
                <img src={ellipse3} alt="" />
              </ImgDiv>
              <Link to={`${item.catalogImg}`}>{item.catalogImg}</Link>
            </ImgItems>
          ))}
    </ImgDataDiv>
  );
}
