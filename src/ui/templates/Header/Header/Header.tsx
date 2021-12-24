import React from "react";
import { HeaderLayout, LeftMenu, Logo } from "./Header.styled";
import Image from "next/image";
import LogoImage from "assets/img/logo.png";
import { Menu } from "ui/templates/Menu";
import { WalletConnectMenu } from "ui/templates/Menu";
const Header = () => {
  return (
    <HeaderLayout>
      <LeftMenu>
        <Logo>
          <Image src={LogoImage.src} width={146} height={66} alt="" />
        </Logo>
        <Menu />
      </LeftMenu>

      <WalletConnectMenu />
    </HeaderLayout>
  );
};
export default Header;
