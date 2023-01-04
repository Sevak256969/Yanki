import React from "react";
import menuItems from "./header.json";
import { NavUl, NavLi } from "../MainTags";
import { NavLink, useLocation } from "react-router-dom";

export default function Nav({ open }) {
  const { pathname } = useLocation();
  return (
    <NavUl open={open}>
      {menuItems.map((item) => (
        <NavLi key={item.id} type={pathname === "/" ? "withdraw" : "deposit"}>
          <NavLink to={item.path}>{item.name}</NavLink>
        </NavLi>
      ))}
    </NavUl>
  );
}
