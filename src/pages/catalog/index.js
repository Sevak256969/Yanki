import React, { useEffect, useReducer, useState } from "react";
import ImgData from "./ImgData";
import CatalogCategories from "./CatalogCategories";
import Catalog from "./Catalog";
import { Context } from "../../hooks/contect";
import { SectionCatalog, SectionDiv } from "../../MainTags";
import { CatalogReducer } from "../../reducers/CatalogReducer";

export default function CatalogIndex() {
  const [catalogImg, setCatalogImg] = useState([]);
  const [state, dispatch] = useReducer(CatalogReducer, catalogImg);
  useEffect(() => {
    fetch("https://retoolapi.dev/jPAA08/catalogPictures")
      .then((response) => response.json())
      .then((catalogImg) => setCatalogImg(catalogImg));
  }, []);
  return (
    <>
      <Context.Provider value={{ catalogImg, state, dispatch }}>
        <SectionCatalog>
          <Catalog />
          <SectionDiv>
            <CatalogCategories />
            <ImgData />
          </SectionDiv>
        </SectionCatalog>
      </Context.Provider>
    </>
  );
}
