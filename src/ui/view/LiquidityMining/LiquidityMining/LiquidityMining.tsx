import React, { useState } from "react";
import {
  PageLayout,
  Header,
  Container,
  SearchPoolLayout,
  PoolListLayout,
  MarginDiv,
  Text,
  Row,
  Col,
  PoolSearch,
  SearchInput,
  SearchButton,
  ButtonBox,
  ButtonItem,
  BalanceDropDown,
  PoolList,
} from "./LiquidityMining.styled";

import { Menu } from "ui/templates/Menu";
import { WalletConnectMenu } from "ui/templates/Menu";
import {
  Next,
  Search,
  Dropdown,
  Binance,
  Usdt,
  USDC,
  Dai,
  FTR,
  Inch,
} from "assets/icon";
import Switch from "react-switch";
import { PoolItemData } from "Types/components/PoolItem";
import { PoolItem } from "ui/elements/PoolItem";
// export interface PoolItemData {
//   firstCoinIcon: any;
//   firstCoinText: string;

//   secondCoinIcon: any;
//   secondCoinText: string;
//   rewardTokenIcon: any[];
//   valueLocked: string;
//   myShare: String;
//   availableBalance: string;
//   myReward: string;
//   buttonType: number;
// firstCoinAmount: number;
// secondCoinAmount: number;
// }

const DataList: PoolItemData[] = [
  {
    firstCoinIcon: Binance,
    firstCoinText: "BUSD",
    secondCoinIcon: Usdt,
    secondCoinText: "USDT",
    rewardTokenIcon: [FTR],
    valueLocked: "$635,577.11",
    myShare: "$0 (0%)",
    availableBalance: "$0",
    myReward: "$0",
    buttonType: 1,
    firstCoinAmount: 25.7,
    secondCoinAmount: 35.07,
  },
  {
    firstCoinIcon: USDC,
    firstCoinText: "USDC",
    secondCoinIcon: Binance,
    secondCoinText: "BUSD",
    rewardTokenIcon: [FTR],
    valueLocked: "$925,576.05",
    myShare: "$0 (0%)",
    availableBalance: "$0",
    myReward: "$0",
    buttonType: 1,
    firstCoinAmount: 29.41,
    secondCoinAmount: 25.87,
  },
  {
    firstCoinIcon: Dai,
    firstCoinText: "DAI",
    secondCoinIcon: USDC,
    secondCoinText: "USDC",
    rewardTokenIcon: [FTR],
    valueLocked: "$735,577.11",
    myShare: "$0 (0%)",
    availableBalance: "$0",
    myReward: "$0",
    buttonType: 2,
    firstCoinAmount: 320.73,
    secondCoinAmount: 0,
  },
  {
    firstCoinIcon: Dai,
    firstCoinText: "DAI",
    secondCoinIcon: FTR,
    secondCoinText: "FTR",
    rewardTokenIcon: [Dai, FTR],
    valueLocked: "$925,576.05",
    myShare: "$0 (0%)",
    availableBalance: "$0",
    myReward: "$0",
    buttonType: 2,
    firstCoinAmount: 485.09,
    secondCoinAmount: 0,
  },
  {
    firstCoinIcon: FTR,
    firstCoinText: "FTR",
    secondCoinIcon: Inch,
    secondCoinText: "1Inch",
    rewardTokenIcon: [FTR, Inch],
    valueLocked: "$270,790.5",
    myShare: "$378.47 (0.13%)",
    availableBalance: "$0",
    myReward: "$3.5",
    buttonType: 3,
    firstCoinAmount: 584.73,
    secondCoinAmount: 0,
  },
];

const LiquidityMining = () => {
  const [active, setActive] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  return (
    <PageLayout>
      <Header>
        <Menu />
        <WalletConnectMenu />
      </Header>
      <Container>
        <SearchPoolLayout>
          <Text
            weight="bold"
            color="white"
            size={34}
            font="Rubik"
            lineHeight={42}
          >
            Provide Liquidity, Earn FTR
          </Text>
          <Text
            weight="bold"
            color="#0177FB"
            size={48}
            font="Rubik"
            lineHeight={56}
          >
            $105,786,890.44
          </Text>
          <Row>
            <Text color="white" size={14} weight="normal">
              Total Value Locked (TVL)
            </Text>
            <MarginDiv left={16} right={8}>
              <Text color="#8B8CA7" size={14} weight="normal">
                Tutorial
              </Text>
            </MarginDiv>
            <Next></Next>
          </Row>
          <MarginDiv top={24}>
            <Row>
              <PoolSearch>
                <Row>
                  <Search />
                  <SearchInput placeholder="Search by token symbol or pool address" />
                </Row>
              </PoolSearch>
              <MarginDiv left={24}>
                <SearchButton>Search</SearchButton>
              </MarginDiv>
            </Row>
          </MarginDiv>
        </SearchPoolLayout>
        <PoolListLayout>
          <Row space={true}>
            <ButtonBox>
              <ButtonItem active={!active} onClick={() => setActive(false)}>
                Active
              </ButtonItem>
              <ButtonItem active={active} onClick={() => setActive(true)}>
                Ended
              </ButtonItem>
            </ButtonBox>

            <Row>
              <Text size={14} color="white" weight="normal">
                My Liquidity Only
              </Text>
              <MarginDiv left={16} right={40}>
                <Switch
                  checked={switchChecked}
                  onChange={(checked) => setSwitchChecked(checked)}
                  onColor="#86d3ff"
                  offColor="#3B3C4E"
                  onHandleColor="#2693e6"
                  handleDiameter={24}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={32}
                  width={64}
                />
              </MarginDiv>
              <BalanceDropDown>
                <Text size={14} color="white" weight="600">
                  My Liquidity Only
                </Text>
                <Dropdown />
              </BalanceDropDown>
            </Row>
          </Row>
          <PoolList>
            {DataList.map((Item, index) => (
              <PoolItem data={Item} key={index}></PoolItem>
            ))}
          </PoolList>
        </PoolListLayout>
      </Container>
    </PageLayout>
  );
};
export default LiquidityMining;
