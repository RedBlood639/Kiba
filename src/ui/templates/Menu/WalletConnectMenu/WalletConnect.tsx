import React, { useState } from "react";
import { WalletConnectMenuLayout, IconLayout } from "./WalletConnect.styled";
import { UserIcon } from "assets/icon";
import { WalletConnectButton } from "ui/elements/Button";

const WalletConnect = () => {
  const [connected, setConnected] = useState(false);

  return (
    <WalletConnectMenuLayout>
      <IconLayout>
        {connected ? (
          <UserIcon.User_active iSize={{ x: 30, y: 30 }} />
        ) : (
          <UserIcon.User iSize={{ x: 30, y: 30 }} />
        )}
      </IconLayout>
      <WalletConnectButton isActive={connected} setActive={setConnected} />
    </WalletConnectMenuLayout>
  );
};
export default WalletConnect;
