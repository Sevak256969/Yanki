import React from "react";
import Login from "./Login";
import LoginButton from "./LoginButton";
import { Section2 } from "../../../MainTags";

export default function LoginIndex() {
  return (
    <Section2>
      <Login />
      <LoginButton />
    </Section2>
  );
}
