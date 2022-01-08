import React from "react";
import {
  StakeLayout,
  ChartContainer,
  ChartHeader,
  ChartLayout,
  DetailContainer,
  DetailHeader,
  DetailLayout,
  TableLayout,
  MobileLayout,
  MobileHeader,
  MobileFooter,
  MobileChartContainer,
  MobileDetailContainer,
} from "./Stake.styled";

import { ChartContain } from "ui/templates/ChartContain";
import { OrderTable } from "ui/templates/OrderTable";
import { Dai, FTR } from "assets/icon";

import { Menu } from "ui/templates/Menu";
import { WalletConnectMenu } from "ui/templates/Menu";
import { CardChange } from "ui/templates/CardChange";
import { TableData } from "Types/components/Table";
import { useMediaQuery } from "react-responsive";
import { MobileMenu } from "ui/templates/Menu";
import { FooterMenu } from "ui/templates/Menu";

const TableDatas: TableData[] = [
  {
    receiveCoinIcon: Dai,
    receiveCoinAmount: 132.51853983,
    receiveCoinType: "DAI",
    paidCoinAmount: 0.001432,
    painCoinType: "BNB",
    price: 0.0000108,
    status: true,
    time: "16 hrs",
  },
  {
    receiveCoinIcon: FTR,
    receiveCoinAmount: 1.109,
    receiveCoinType: "FTR",
    paidCoinAmount: 2.4,
    painCoinType: "BNB",
    price: 461.07790652,
    status: true,
    time: "16 hrs",
  },
];

const Stake = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <>
      <StakeLayout>
        <ChartContainer>
          <ChartHeader>
            <Menu />
          </ChartHeader>
          <ChartLayout>
            <ChartContain></ChartContain>
          </ChartLayout>
          <TableLayout>
            <OrderTable tableData={TableDatas} />
          </TableLayout>
        </ChartContainer>
        <DetailContainer>
          <DetailHeader>
            <WalletConnectMenu />
          </DetailHeader>
          <DetailLayout>
            <CardChange></CardChange>
          </DetailLayout>
        </DetailContainer>
      </StakeLayout>
      <MobileLayout>
        <MobileHeader>
          <MobileMenu />
        </MobileHeader>
        <MobileChartContainer>
          <ChartContain></ChartContain>
          <OrderTable tableData={TableDatas} />
        </MobileChartContainer>
        <MobileDetailContainer>
          <CardChange></CardChange>
        </MobileDetailContainer>
        <MobileFooter>
          <FooterMenu></FooterMenu>
        </MobileFooter>
      </MobileLayout>
    </>
  );
};
export default Stake;
