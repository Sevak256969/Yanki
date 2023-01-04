import React from "react";
import { LoginDiv, LoginH2, Input } from "../../../MainTags";

export default function Login() {
  return (
    <LoginDiv>
      <LoginH2>Узнайте первым о новинках</LoginH2>
      <Input type="text" placeholder="Ваш e-mail*" />
    </LoginDiv>
  );
}
