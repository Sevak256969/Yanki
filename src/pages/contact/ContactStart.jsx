import React from "react";
import { NavLink } from "react-router-dom";
import vector from "./Vector.png";
import { ContactMain, ContactP } from "../../MainTags";

export default function ContactStart() {
  return (
    <div>
      <ContactMain>
        <NavLink to="/">Главная</NavLink>
        <img src={vector} alt="" />
        <p>Контакты</p>
      </ContactMain>
      <ContactP>Связаться с нами</ContactP>
    </div>
  );
}
