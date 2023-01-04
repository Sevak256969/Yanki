import React from "react";
import Collection from "./newCollection";
import Login from "./login";
import CategoriesIndex from "./categories";

export default function HomeIndex() {
  return (
    <main>
      <Collection />
      <CategoriesIndex />
      <Login />
    </main>
  );
}
