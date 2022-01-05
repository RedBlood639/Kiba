import React from "react";
import {
  PageLayout,
  LeaderboardContainer,
  LeaderboardHeader,
  LeaderboardLayout,
  DetailContainer,
  DetailHeader,
  DetailLayout,
} from "./TradingMining.styled";

import { Menu } from "ui/templates/Menu";
import { WalletConnectMenu } from "ui/templates/Menu";
import { Leaderboard } from "ui/templates/Leaderboard";
import { Trading } from "ui/templates/Trading";

const Home = () => {
  return (
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
  );
};
export default Home;
