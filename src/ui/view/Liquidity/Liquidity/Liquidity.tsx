import React, { useState } from "react";
import {
  LiquidityLayout,
  LiquidityContainer,
  LiquidityHeader,
  DetailContainer,
  DetailHeader,
  DetailLayout,
  LiquidityTableLayout,
  ModalLayout,
  ModalText,
  ModalTitle,
  ModalButton,
  MobileLayout,
  MobileHeader,
  MobileFooter,
  MobileChartContainer,
  MobileDetailContainer,
  MobileTableLayout,
} from "./Liquidity.styled";
import Modal from "react-modal";
import { Menu } from "ui/templates/Menu";
import { WalletConnectMenu } from "ui/templates/Menu";
import { LiquidityTable } from "ui/templates/LiquidityTable";
import { LiquidityTableData } from "Types/components/Table";
import { Eth, USDC, Usdt, Dai, Binance, Inch } from "assets/icon";
import { LiquidityDetail } from "ui/templates/LiquidityDetail";
import { MobileMenu } from "ui/templates/Menu";
import { FooterMenu } from "ui/templates/Menu";

const tableData: LiquidityTableData[] = [
  {
    firstCoinIcon: Eth,
    secondCoinIcon: USDC,
    poolAddress: "0x75f5...1666",
    firstCoinAmount: 1.104008,
    firstCoinType: "WETH",
    secondCoinAmount: 2888.28,
    secondCoinType: "USDC",
  },
  {
    firstCoinIcon: Dai,
    secondCoinIcon: USDC,
    poolAddress: "0x3đ1...077b",
    firstCoinAmount: 300,
    firstCoinType: "DAIDAI",
    secondCoinAmount: 300,
    secondCoinType: "USDC",
  },
  {
    firstCoinIcon: Binance,
    secondCoinIcon: Usdt,
    poolAddress: "0x3đ1...077b",
    firstCoinAmount: 500,
    firstCoinType: "BUSD",
    secondCoinAmount: 500,
    secondCoinType: "USDT",
  },
  {
    firstCoinIcon: Eth,
    secondCoinIcon: Inch,
    poolAddress: "0x75f5...1666",
    firstCoinAmount: 0.624822,
    firstCoinType: "WETH",
    secondCoinAmount: 33997585406,
    secondCoinType: "1INCH",
  },
  {
    firstCoinIcon: Dai,
    secondCoinIcon: Eth,
    poolAddress: "0x3đ1...077b",
    firstCoinAmount: 100,
    firstCoinType: "DAIDAI",
    secondCoinAmount: 0.03837881,
    secondCoinType: "WETH",
  },
];

const Liquidity = () => {
  const [StartModalOpen, setStartModalOpen] = useState(true);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      width: "320px",
      height: "537px",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "24px",
      background: "#23242F",
      borderRadius: "24px",
      overflow: "hidden",
      outline: "none",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 1000,
    },
  };
  return (
    <>
      <LiquidityLayout>
        <Modal
          isOpen={StartModalOpen}
          contentLabel="ChooseWallet"
          style={customStyles}
          ariaHideApp={false}
        >
          <ModalLayout>
            <ModalTitle>Risk Disclaimer</ModalTitle>
            <ModalText>
              Market making and liquidity provision involve risk of loss and are
              not suitable for every user. The valuation and prices of token
              assets may fluctuate substantially, and, as a result, users may
              see profits that are below expectations, or even sustain losses.
            </ModalText>
            <ModalButton onClick={() => setStartModalOpen(false)}>
              Continue
            </ModalButton>
          </ModalLayout>
        </Modal>
        <LiquidityContainer>
          <LiquidityHeader>
            <Menu />
          </LiquidityHeader>
          <LiquidityTableLayout>
            <LiquidityTable tableData={tableData}></LiquidityTable>
          </LiquidityTableLayout>
        </LiquidityContainer>
        <DetailContainer>
          <DetailHeader>
            <WalletConnectMenu />
          </DetailHeader>
          <DetailLayout>
            <LiquidityDetail />
          </DetailLayout>
        </DetailContainer>
      </LiquidityLayout>
      <MobileLayout>
        <MobileHeader>
          <MobileMenu />
        </MobileHeader>
        <MobileChartContainer>
          <MobileTableLayout>
            <LiquidityTable tableData={tableData}></LiquidityTable>
          </MobileTableLayout>
        </MobileChartContainer>
        <MobileDetailContainer>
          <LiquidityDetail />
        </MobileDetailContainer>
        <MobileFooter>
          <FooterMenu></FooterMenu>
        </MobileFooter>
      </MobileLayout>
    </>
  );
};
export default Liquidity;
