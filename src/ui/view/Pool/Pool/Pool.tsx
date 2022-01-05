import React from "react";
import {
  PageLayout,
  PoolListContainer,
  PoolListHeader,
  PoolListLayout,
  DetailContainer,
  DetailHeader,
  DetailLayout,
} from "./Pool.styled";

import { Menu } from "ui/templates/Menu";
import { WalletConnectMenu } from "ui/templates/Menu";
import { PoolTable } from "ui/templates/PoolTable";
import { PoolAnalysis } from "ui/templates/PoolAnalysis";

import { PoolListData } from "Types/components/PoolList";
import { BUSD, FTR, USDC, Inch } from "assets/icon";
const dataList: PoolListData[] = [
  {
    address: "0xBAD7...E116",
    access: "Public",
    freeRate: "0.3%",
    liquidityFirstAmount: 1300,
    liquidityFirstIcon: BUSD,
    liquidityFirstType: "BUSD",
    liquiditySecondAmount: 937.67253371,
    liquiditySecondIcon: FTR,
    liquiditySecondType: "FTR",
    volume: "$0",
  },
  {
    address: "0xBAD7...E116",
    access: "Public",
    freeRate: "0.24%",
    liquidityFirstAmount: 420,
    liquidityFirstIcon: BUSD,
    liquidityFirstType: "BUSD",
    liquiditySecondAmount: 303.00323706,
    liquiditySecondIcon: FTR,
    liquiditySecondType: "FTR",
    volume: "$0",
  },
  {
    address: "0xBAD7...E116",
    access: "Public",
    freeRate: "0.31%",
    liquidityFirstAmount: 500,
    liquidityFirstIcon: BUSD,
    liquidityFirstType: "BUSD",
    liquiditySecondAmount: 500,
    liquiditySecondIcon: USDC,
    liquiditySecondType: "USDC",
    volume: "$0",
  },
  {
    address: "0xBAD7...E116",
    access: "Public",
    freeRate: "0.14%",
    liquidityFirstAmount: 2000,
    liquidityFirstIcon: BUSD,
    liquidityFirstType: "BUSD",
    liquiditySecondAmount: 366.56307939,
    liquiditySecondIcon: Inch,
    liquiditySecondType: "1INCH",
    volume: "$0",
  },
];

const Home = () => {
  return (
    <PageLayout>
      <PoolListContainer>
        <PoolListHeader>
          <Menu />
        </PoolListHeader>
        <PoolListLayout>
          <PoolTable tableData={dataList}></PoolTable>
        </PoolListLayout>
      </PoolListContainer>
      <DetailContainer>
        <DetailHeader>
          <WalletConnectMenu />
        </DetailHeader>
        <DetailLayout>
          <PoolAnalysis />
        </DetailLayout>
      </DetailContainer>
    </PageLayout>
  );
};
export default Home;
