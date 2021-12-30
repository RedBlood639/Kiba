import React from "react";
import {
  HomeLayout,
  ChartContainer,
  ChartHeader,
  ChartLayout,
  DetailContainer,
  DetailHeader,
  DetailLayout,
} from "./TradingMining.styled";

import { Menu } from "ui/templates/Menu";
import { WalletConnectMenu } from "ui/templates/Menu";

const Home = () => {
  return (
    <HomeLayout>
      <ChartContainer>
        <ChartHeader>
          <Menu />
        </ChartHeader>
        <ChartLayout></ChartLayout>
      </ChartContainer>
      <DetailContainer>
        <DetailHeader>
          <WalletConnectMenu />
        </DetailHeader>
        <DetailLayout></DetailLayout>
      </DetailContainer>
    </HomeLayout>
  );
};
export default Home;
