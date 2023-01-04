import React from "react";
import contactItems from "./contactMenu.json";
import { NavLink } from "react-router-dom";
import {
  FooterLi,
  ContactFirstChild,
  ContactChild,
  ContactUL,
  ContactH2,
} from "../../MainTags";

export default function Contact() {
  return (
    <div>
      <ContactFirstChild>
        {contactItems.map((item) => (
          <ContactChild key={item.id}>
            <ContactUL>
              <li>
                <ContactH2>{item.headName}</ContactH2>
              </li>
              {item.a1.map((item) => (
                <FooterLi key={item.id}>
                  {item?.path && item?.name ? (
                    <NavLink to={item?.path} key={item.id}>
                      {item?.name}
                    </NavLink>
                  ) : item?.path_link && item?.name ? (
                    <a key={item.id} href={item.path_link}>
                      {item.name}
                    </a>
                  ) : (
                    item.links.map((link) => (
                      <a key={link.id} href={link.path_link}>
                        <img src={require(`${link.img}`)} alt="" />
                      </a>
                    ))
                  )}
                </FooterLi>
              ))}
            </ContactUL>
          </ContactChild>
        ))}
      </ContactFirstChild>
    </div>
  );
}
