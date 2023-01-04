import React, { useEffect, useState, useReducer } from "react";
import { Link } from "react-router-dom";
import { CatCategories, CatSpan, FilterDiv } from "../../MainTags";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import filter from "./filter.png";
import { reducerFetch } from "../../reducers/FetchReducer";

export default function CatalogCategories() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [display, setDisplay] = useState(false);
  const [state, dispatch] = useReducer(reducerFetch, {
    loading: true,
    data: [],
    err: "",
  });
  useEffect(() => {
    function getParametrers() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", getParametrers);
    return () => window.removeEventListener("resize", getParametrers);
  }, []);

  useEffect(() => {
    fetch("https://retoolapi.dev/5wtipM/categories")
      .then((res) => res.json())
      .then((categories) => {
        dispatch({ type: "Fetch_Success", payload: categories });
      })
      .catch((err) => dispatch({ type: "Fetch_Error" }));
  }, []);
  return (
    <CatCategories>
      {windowWidth <= 768 && (
        <CatSpan onClick={() => setDisplay(!display)}>
          <FilterDiv>
            <h2>Фильтры</h2>
            <img src={filter} alt="" />
          </FilterDiv>
          <KeyboardArrowDownIcon />
        </CatSpan>
      )}
      {(display || windowWidth >= 768) &&
        !state.loading &&
        state.data.map((item) => (
          <div key={item.id}>
            <Link to={`${item.name}`}>{item.categories}</Link>
          </div>
        ))}
    </CatCategories>
  );
}
