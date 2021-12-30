import React from "react";
import {
  HomeLayout,
  ChartContainer,
  ChartHeader,
  ChartLayout,
  DetailContainer,
  DetailHeader,
  DetailLayout,
} from "./Home.styled";

import { ChartContain } from "ui/templates/ChartContain";

import { Menu } from "ui/templates/Menu";
import { WalletConnectMenu } from "ui/templates/Menu";
import { CardChange } from "ui/templates/CardChange";

const Home = () => {
  return (
    <HomeLayout>
      <ChartContainer>
        <ChartHeader>
          <Menu />
        </ChartHeader>
        <ChartLayout>
          <ChartContain></ChartContain>
        </ChartLayout>
      </ChartContainer>
      <DetailContainer>
        <DetailHeader>
          <WalletConnectMenu />
        </DetailHeader>
        <DetailLayout>
          <CardChange></CardChange>
        </DetailLayout>
      </DetailContainer>
    </HomeLayout>
  );
};
export default Home;
