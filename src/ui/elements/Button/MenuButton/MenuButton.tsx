import React from "react";
import { MenuButtonLayout } from "./MenuButton.styled";
import { MenuIcon } from "assets/icon";

const MenuButton = () => {
  return (
    <MenuButtonLayout
      onClick={() => {
        console.log("sdfaewfwef");
      }}
    >
      <MenuIcon iSize={{ x: 40, y: 40 }} />
    </MenuButtonLayout>
  );
};
export default MenuButton;
