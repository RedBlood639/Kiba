import React from "react";
import {
  WalletConnectButtonLayout,
  Connectdiv,
  ConnectButton,
  IconLayout,
} from "./WalletConnectButton.styled";
import { Signal } from "assets/icon";

const WalletConnectButton = () => {
  return (
    <WalletConnectButtonLayout>
      <Connectdiv>
        <IconLayout>
          <Signal />
        </IconLayout>
        <label>BSC</label>
        <ConnectButton>Connect to a wallet</ConnectButton>
      </Connectdiv>
    </WalletConnectButtonLayout>
  );
};
export default WalletConnectButton;
