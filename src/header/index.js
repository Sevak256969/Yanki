import React from "react";
import Burger from "./Burger";
import Gift from "./GetFinder";
import Icon from "./Icon";
import { Header1 } from "../MainTags";

export default function Header() {
  return (
    <Header1>
      <Burger />
      <Gift />
      <Icon />
    </Header1>
  );
}
