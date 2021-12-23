import React from "react";
import { HeaderLayout, Logo } from "./Header.styled";
import LogoImage from "assets/img/logo.png";
import { Menu } from "ui/templates/Menu";
const Header = () => {
  return (
    <HeaderLayout>
      <Logo src={LogoImage.src} />
      <Menu />
    </HeaderLayout>
  );
};
export default Header;
