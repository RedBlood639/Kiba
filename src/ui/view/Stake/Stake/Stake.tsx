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
} from "./Stake.styled";

import { ChartContain } from "ui/templates/ChartContain";
import { OrderTable } from "ui/templates/OrderTable";
import { MTV, FTR } from "assets/icon";

import { Menu } from "ui/templates/Menu";
import { WalletConnectMenu } from "ui/templates/Menu";
import { CardChange } from "ui/templates/CardChange";
import { TableData } from "Types/components/Table";

const TableDatas: TableData[] = [
  {
    receiveCoinIcon: MTV,
    receiveCoinAmount: 132.51853983,
    receiveCoinType: "MTV",
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
  return (
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
  );
};
export default Stake;
