import React, { useState, useEffect, useContext } from "react";
import {
  CatalogDiv,
  CatDiv,
  ContactMain,
  CatalogsDiv,
  SelectSec,
  BtnFilter,
} from "../../MainTags";
import { NavLink } from "react-router-dom";
import vector from "../contact/Vector.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import options from "./select.json";
import { Context } from "../../hooks/contect";

export default function Catalog() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(false);
  const [val, setVal] = useState("");
  const [params, setParams] = useState("");
  const { state, catalogImg, dispatch } = useContext(Context);
  useEffect(() => {
    function getParametrers() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", getParametrers);
    return () => window.removeEventListener("resize", getParametrers);
  }, []);
  const handleChange = (event) => {
    !val ? setVal("poxos") : setVal(event.target.value);
    console.log(val);
  };
  return (
    <div>
      <ContactMain>
        <NavLink to="/">Главная</NavLink>
        <img src={vector} alt="" />
        <p>Каталог</p>
      </ContactMain>
      <CatDiv>
        <CatalogsDiv>
          Каталог{" "}
          {windowWidth <= 768 && (
            <span onClick={() => setDisplay(!display)}>
              <KeyboardArrowDownIcon />
            </span>
          )}
        </CatalogsDiv>
        <CatalogDiv>
          {(display || windowWidth >= 768) &&
            options.map((i, index) => (
              <SelectSec
                key={index}
                value={val}
                onChange={handleChange}
                defaultValue={"default"}
                onFocus={handleChange}
              >
                {i.map((item, indexs) =>
                  indexs === 0 ? (
                    <option value={"default"}>{item.label}</option>
                  ) : (
                    <option key={indexs} value={item.value}>
                      {item.label}
                    </option>
                  )
                )}
              </SelectSec>
            ))}
          <BtnFilter
            onClick={() =>
              dispatch({
                type: "FILTER",
                payload: { catalogImg: catalogImg, value: val, params: params },
              })
            }
          >
            Filter
          </BtnFilter>
        </CatalogDiv>
      </CatDiv>
    </div>
  );
}
