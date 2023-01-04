import React from "react";
import { Button, LoginP, RegDiv } from "../../../MainTags";

export default function LoginButton() {
  return (
    <RegDiv>
      <Button>ПОДПИСАТЬСЯ</Button>
      <LoginP>
        Нажимая на кнопку «Подписаться», я соглашаюсь на обработку моих <br />{" "}
        персональных данных и ознакомлена с условиями конфиденциальности.
      </LoginP>
    </RegDiv>
  );
}
