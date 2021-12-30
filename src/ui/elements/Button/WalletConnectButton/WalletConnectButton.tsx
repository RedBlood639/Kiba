import React, { useState, useEffect } from "react";
import {
  WalletConnectButtonLayout,
  Connectdiv,
  ConnectButton,
  IconLayout,
  ItemList,
  Header,
  Text,
} from "./WalletConnectButton.styled";

import Modal from "react-modal";
import { Metamask, Portis, Binance, Wallet, Close, Signal } from "assets/icon";
import { WalletItem } from "ui/elements/WalletItem";

import { WalletItemData } from "Types/components/Wallet";
const WalletItems: WalletItemData[] = [
  { subIcon: Metamask, subTitle: "Meta mask" },
  { subIcon: Binance, subTitle: "Binance Chain Wallet" },
  { subIcon: Wallet, subTitle: "WalletConnect" },
  { subIcon: Portis, subTitle: "Portis" },
];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "390px",
    height: "448px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    padding: "24px 24px 32px",
    background: "#23242F",
    borderRadius: "24px",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    outline: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const WalletConnectButton: React.FC<{
  isActive: boolean;
  setActive: Function;
}> = ({ isActive, setActive }) => {
  const [walletModal, setWalletModal] = useState(false);
  const [wallet, getWallet] = useState(0);
  let count: number = 0;
  useEffect(() => {
    setWalletModal(false);
    if (wallet) {
      setActive(true);
    }
  }, [wallet]);
  return (
    <WalletConnectButtonLayout>
      <Connectdiv>
        <IconLayout>
          {isActive ? <Signal iColor="#53F3C3" /> : <Signal />}
        </IconLayout>
        <label>BSC</label>
        <ConnectButton
          onClick={() => {
            wallet == 0 ? setWalletModal(true) : setWalletModal(false);
          }}
        >
          {wallet ? "0xBAD7...E116" : "Connect to a wallet"}
        </ConnectButton>
        <Modal
          isOpen={walletModal}
          contentLabel="ChooseWallet"
          style={customStyles}
          ariaHideApp={false}
        >
          <Header>
            <Text>Connect Wallet</Text>
            <div onClick={() => setWalletModal(false)}>
              <Close />
            </div>
          </Header>
          <ItemList>
            {WalletItems.map((Item, index) => (
              <WalletItem
                key={`MenuItem_${index}`}
                itemData={Item}
                keys={index}
                getData={getWallet}
              ></WalletItem>
            ))}
          </ItemList>
        </Modal>
      </Connectdiv>
    </WalletConnectButtonLayout>
  );
};
export default WalletConnectButton;
