import React from "react";
import { WalletConnectMenuLayout, IconLayout } from "./WalletConnect.styled";
import { UserIcon } from "assets/icon";
import { WalletConnectButton, MenuButton } from "ui/elements/Button";

const SubMenu = () => {
  return (
    <WalletConnectMenuLayout>
      <IconLayout>
        <UserIcon.User_active iSize={{ x: 30, y: 30 }} />
      </IconLayout>
      <WalletConnectButton />
      <MenuButton />
    </WalletConnectMenuLayout>
  );
};
export default SubMenu;
