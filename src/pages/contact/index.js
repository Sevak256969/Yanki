import React from "react";
import Login from "../home/login/Login";
import { ContactSection, ContactDiv } from "../../MainTags";
import LoginButton from "../home/login/LoginButton";
import ContactStart from "./ContactStart";
import Contact from "./Contact";

export default function ContactIndex() {
  return (
    <ContactSection>
      <ContactStart />
      <Contact />
      <ContactDiv>
        <Login />
        <LoginButton />
      </ContactDiv>
    </ContactSection>
  );
}
