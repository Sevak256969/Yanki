import React, { useState } from "react";
import Nav from "./Nav";
import Menu from "./Menu";

export default function Burger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div open={open} onClick={() => setOpen(!open)}>
        <Menu />
      </div>
      <Nav open={open} />
    </>
  );
}
