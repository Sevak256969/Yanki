import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { WearDiv, WearItemsDiv, ImgDiv } from "../../MainTags";
import ellipse1 from "./Ellipse 1.png";
import ellipse2 from "./Ellipse 2.png";
import ellipse3 from "./Ellipse 3.png";

export default function WearsItem() {
  const { name, id } = useParams();
  const [trench, setTrench] = useState({});
  const [error, setError] = useState("");
  useEffect(() => {
    fetch(`http://localhost:3001/${name}/${id}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject("sxal");
        }
      })
      .then((clots) => setTrench(clots))
      .catch((err) => setError(err));
  }, [name,id]);
  return (
    <WearDiv>
      {error ? (
        <h2>Tvyal apranq@ goyutyun chuni</h2>
      ) : (
        <WearItemsDiv key={trench.id}>
          <img src={trench.img} alt="" />
          <h2>{trench.size}</h2>
          <p>{trench.price}</p>
          <h2>{trench.title}</h2>
          <ImgDiv>
            <img src={ellipse1} alt="" />
            <img src={ellipse2} alt="" />
            <img src={ellipse3} alt="" />
          </ImgDiv>
        </WearItemsDiv>
      )}
    </WearDiv>
  );
}
