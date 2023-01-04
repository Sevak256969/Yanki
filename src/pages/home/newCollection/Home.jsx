import React from "react";
import { HomeTextParent, HomeTextH2, HomeTextP } from "../../../MainTags";

export default function Home() {
  return (
    <div>
      <HomeTextParent>
        <HomeTextH2>Новая коллекция</HomeTextH2>
        <div>
          <HomeTextP>Смотреть Новинки ›</HomeTextP>
        </div>
      </HomeTextParent>
    </div>
  );
}
