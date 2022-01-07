import React, { useState } from "react";

import LogoImage from "assets/img/logo.png";
import Image from "next/image";

import { useRouter } from "hooks";

import { MobileMenuLayout, LogoLayout, Logo } from "./MobileMenu.styled";
import { WalletConnectMenu } from "..";
const MobileMenu = () => {
  const { move } = useRouter();
  return (
    <MobileMenuLayout>
      <LogoLayout
        onClick={() => {
          move("/");
        }}
      >
        <Logo>
          <Image src={LogoImage.src} width={66} height={66} alt="" />
        </Logo>
      </LogoLayout>
      <WalletConnectMenu />
    </MobileMenuLayout>
  );
};
export default MobileMenu;
