import React, { useState } from "react";
import {
  LiquidityDetailLayout,
  AddLayout,
  SelectAPair,
  EnterAnAmount,
  SelectAPool,
  AddLayoutMain,
  AddLayoutDescription,
  Text,
  Textset,
  Col,
  Row,
  DropdownPair,
  AddButton,
  MarginDiv,
} from "./LiquidityDetail.styled";
import { Plus, Eth, USDC } from "assets/icon";
import { CoinSelector } from "ui/elements/CoinSelector";
import { PoolSelector } from "ui/elements/PoolSelector";
import { CoinSelectorBar } from "ui/elements/CoinSelector";
import { PoolSelectorBar } from "ui/elements/PoolSelector";
import { AddLiquidity } from "ui/elements/AddLiquidity";

import { CoinSelectorData, CoinSelectorBarData } from "Types/components/Coin";
import { PoolSelectorData, PoolSelectorBarData } from "Types/components/Pool";
const LiquidityDetail = () => {
  const [showSelectCoin, setShowSelectCoin] = useState(false);
  const [showSelectPool, setShowSelectPool] = useState(false);
  const [showEnter, setShowEnter] = useState(false);
  const [coin, setCoin] = useState();
  const [pool, setPool] = useState();
  const From: CoinSelectorData = {
    icon: Eth,
    text: "ETH",
    selectFunction: setShowSelectCoin,
  };
  const To: CoinSelectorData = {
    icon: USDC,
    text: "USDC",
    selectFunction: setShowSelectCoin,
  };
  const Pool: PoolSelectorData = {
    address: "0x75c2...ff34",
    selectFunction: setShowSelectPool,
  };
  const getCoin: CoinSelectorBarData = {
    selectFunction: setShowSelectCoin,
    getData: setCoin,
  };
  const getPool: PoolSelectorBarData = {
    selectFunction: setShowSelectPool,
    getData: setPool,
  };
  return (
    <LiquidityDetailLayout>
      {!showEnter ? (
        !showSelectPool ? (
          showSelectCoin ? (
            <SelectAPair>
              <CoinSelectorBar data={getCoin} />
            </SelectAPair>
          ) : (
            <AddLayout>
              <AddLayoutMain>
                <MarginDiv bottom={8}>
                  <Textset>
                    <Text color="#8B8CA7" size={14} weight="normal">
                      Select a pair
                    </Text>
                  </Textset>
                </MarginDiv>
                <MarginDiv bottom={24}>
                  <DropdownPair>
                    <CoinSelector data={From}></CoinSelector>
                    <Plus />
                    <CoinSelector data={To}></CoinSelector>
                  </DropdownPair>
                </MarginDiv>
                <MarginDiv bottom={8}>
                  <Textset>
                    <Text color="#8B8CA7" size={14} weight="normal">
                      Select a pool
                    </Text>
                    <Text
                      color="#E33319"
                      size={12}
                      weight="normal"
                      under={true}
                    >
                      Create a pool
                    </Text>
                  </Textset>
                </MarginDiv>
                <MarginDiv bottom={24}>
                  <PoolSelector data={Pool}></PoolSelector>
                </MarginDiv>
                <MarginDiv bottom={8}>
                  <Textset>
                    <Text color="#8B8CA7" size={14} weight="normal">
                      Total Liquidity
                    </Text>
                    <Row>
                      <Text color="#FFFFFF" size={16} weight="600">
                        9,577.514455
                      </Text>
                      <Eth iSize={{ x: 24, y: 24 }} />
                    </Row>
                  </Textset>
                </MarginDiv>
                <MarginDiv bottom={24}>
                  <Textset>
                    <div></div>
                    <Row>
                      <Text color="#FFFFFF" size={16} weight="600">
                        10,831,937.7876
                      </Text>
                      <USDC iSize={{ x: 24, y: 24 }} />
                    </Row>
                  </Textset>
                </MarginDiv>
                <AddButton onClick={() => setShowEnter(true)}>
                  Add Liquidity
                </AddButton>
              </AddLayoutMain>
              <AddLayoutDescription>
                <Text color="#8B8CA7" weight="normal" size={14}>
                  By adding liquidity, you will earn fees proportional to your
                  share of the pool on all trades for this pair. Fees are added
                  to the pool, accrue in real time, and can be claimed when you
                  withdraw your liquidity.
                </Text>
              </AddLayoutDescription>
            </AddLayout>
          )
        ) : (
          <SelectAPool>
            <PoolSelectorBar data={getPool} />
          </SelectAPool>
        )
      ) : (
        <EnterAnAmount>
          <AddLiquidity data={setShowEnter} />
        </EnterAnAmount>
      )}
    </LiquidityDetailLayout>
  );
};
export default LiquidityDetail;
