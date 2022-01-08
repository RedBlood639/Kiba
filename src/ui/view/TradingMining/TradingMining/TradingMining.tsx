import React from "react";
import {
  PageLayout,
  LeaderboardContainer,
  LeaderboardHeader,
  LeaderboardLayout,
  DetailContainer,
  DetailHeader,
  DetailLayout,
  MobileLayout,
  MobileHeader,
  MobileFooter,
  MobileChartContainer,
  MobileDetailContainer,
} from "./TradingMining.styled";

import { Menu } from "ui/templates/Menu";
import { WalletConnectMenu } from "ui/templates/Menu";
import { Leaderboard } from "ui/templates/Leaderboard";
import { Trading } from "ui/templates/Trading";
import { MobileMenu } from "ui/templates/Menu";
import { FooterMenu } from "ui/templates/Menu";

const Home = () => {
  return (
    <>
      <PageLayout>
        <LeaderboardContainer>
          <LeaderboardHeader>
            <Menu />
          </LeaderboardHeader>
          <LeaderboardLayout>
            <Leaderboard />
          </LeaderboardLayout>
        </LeaderboardContainer>
        <DetailContainer>
          <DetailHeader>
            <WalletConnectMenu />
          </DetailHeader>
          <DetailLayout>
            <Trading />
          </DetailLayout>
        </DetailContainer>
      </PageLayout>
      <MobileLayout>
        <MobileHeader>
          <MobileMenu />
        </MobileHeader>
        <MobileChartContainer>
          <Leaderboard />
        </MobileChartContainer>
        <MobileDetailContainer>
          <Trading />
        </MobileDetailContainer>
        <MobileFooter>
          <FooterMenu></FooterMenu>
        </MobileFooter>
      </MobileLayout>
    </>
  );
};
export default Home;
