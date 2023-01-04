import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Error404 from "../../Error404";
import { WearDiv, WearItemsDiv, ImgDiv } from "../../MainTags";
import ellipse1 from "./Ellipse 1.png";
import ellipse2 from "./Ellipse 2.png";
import ellipse3 from "./Ellipse 3.png";

export default function Wears() {
  const { name } = useParams();
  const [trench, setTrench] = useState([]);
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3001/${name}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject("sxal");
        }
      })
      .then((clots) => setTrench(clots))
      .catch((err) => setError(err));
  }, [name]);
  return (
    <WearDiv>
      {error ? (
        <Error404 />
      ) : (
        trench.length &&
        trench.map((item) => (
          <WearItemsDiv key={item.id}>
            <Link to={`${item.id}`}>
              <img src={item.img} alt="" />
            </Link>
            <h2>{item.size}</h2>
            <p>{item.price}</p>
            <h2>{item.title}</h2>
            <ImgDiv>
              <img src={ellipse1} alt="" />
              <img src={ellipse2} alt="" />
              <img src={ellipse3} alt="" />
            </ImgDiv>
          </WearItemsDiv>
        ))
      )}
    </WearDiv>
  );
}
