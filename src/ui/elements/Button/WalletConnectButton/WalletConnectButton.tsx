import React, { useState, useEffect } from "react";
import {
  WalletConnectButtonLayout,
  Connectdiv,
  ConnectButton,
  IconLayout,
  ItemList,
  Header,
  Text,
  SelectDiv,
  SelectButton,
  ButtonGroup,
  PLabel,
} from "./WalletConnectButton.styled";

import Modal from "react-modal";
import {
  Metamask,
  Portis,
  Binance,
  Wallet,
  Close,
  Signal,
  Menu,
} from "assets/icon";
import { WalletItem } from "ui/elements/WalletItem";
import binanceImage from "assets/img/binance.png";
import avaxImage from "assets/img/avax.png";
import etherImage from "assets/img/ether.png";
import ftmImage from "assets/img/ftm.png";
import maticImage from "assets/img/matic.png";

import { WalletItemData } from "Types/components/Wallet";
import { ChainItem } from "ui/elements/ChainItem";
import { ChainData } from "Types/components/Chain";

const WalletItems: WalletItemData[] = [
  { subIcon: Metamask, subTitle: "Meta mask" },
  { subIcon: Binance, subTitle: "Binance Chain Wallet" },
  { subIcon: Wallet, subTitle: "WalletConnect" },
  { subIcon: Portis, subTitle: "Portis" },
];

const ChainDatas: ChainData[] = [
  { subIcon: binanceImage, subTitle: "Binance Smart Chain", title: "BSC" },
  { subIcon: etherImage, subTitle: "Ethereum", title: "ETH" },
  { subIcon: avaxImage, subTitle: "Avalanche", title: "AVAX" },
  { subIcon: ftmImage, subTitle: "Fantom", title: "FTM" },
  { subIcon: maticImage, subTitle: "Polygon", title: "MATIC" },
];

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    width: "320px",
    height: "448px",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    padding: "24px 24px 32px",
    background: "#23242F",
    borderRadius: "24px",
    overflow: "hidden",
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
  useEffect(() => {
    setWalletModal(false);
    if (wallet) {
      setActive(true);
    }
  }, [wallet]);

  const [chainModal, setChainModal] = useState(false);
  const [chain, getChain] = useState("");
  useEffect(() => {
    setChainModal(false);
  }, [chain]);
  return (
    <ButtonGroup>
      <WalletConnectButtonLayout>
        <Connectdiv>
          <IconLayout>
            {isActive ? <Signal iColor="#53F3C3" /> : <Signal />}
          </IconLayout>
          <PLabel>{chain}</PLabel>
          <ConnectButton
            onClick={() => {
              wallet == 0 && chain != ""
                ? setWalletModal(true)
                : setWalletModal(false);
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
      <SelectDiv>
        <SelectButton onClick={() => setChainModal(true)}>
          <Menu />
        </SelectButton>
        <Modal
          isOpen={chainModal}
          contentLabel="ChooseNetwork"
          style={customStyles}
          ariaHideApp={false}
        >
          <Header>
            <Text>Network Select</Text>
            <div onClick={() => setChainModal(false)}>
              <Close />
            </div>
          </Header>
          <ItemList>
            {ChainDatas.map((Item, index) => (
              <ChainItem
                key={`MenuItem_${index}`}
                itemData={Item}
                getData={getChain}
              ></ChainItem>
            ))}
          </ItemList>
        </Modal>
      </SelectDiv>
    </ButtonGroup>
  );
};
export default WalletConnectButton;
