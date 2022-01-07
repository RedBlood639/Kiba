import React from "react";

import {
  Layout,
  ChartContainer,
  ChartHeader,
  ChartLayout,
  DetailContainer,
  DetailHeader,
  DetailLayout,
  MobileLayout,
  MobileHeader,
  MobileFooter,
  MobileChartContainer,
  MobileDetailContainer,
} from "./Home.styled";

import { ChartContain } from "ui/templates/ChartContain";

import { useMediaQuery } from "react-responsive";

import { Menu } from "ui/templates/Menu";
import { WalletConnectMenu } from "ui/templates/Menu";
import { CardChange } from "ui/templates/CardChange";
import { MobileMenu } from "ui/templates/Menu";
import { FooterMenu } from "ui/templates/Menu";

const Home = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  return (
    <>
      <Layout>
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
      </Layout>
      <MobileLayout>
        <MobileHeader>
          <MobileMenu />
        </MobileHeader>
        <MobileChartContainer>
          <ChartContain></ChartContain>
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
export default Home;
