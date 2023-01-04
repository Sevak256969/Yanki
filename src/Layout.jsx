import React from "react";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router";
import {MainDiv} from "./MainTags"
export default function Layout() {
  return (
    <>
      <Header />
      <MainDiv>
        <Outlet />
      </MainDiv>
      <Footer />
    </>
  );
}
