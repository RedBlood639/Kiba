import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import {
  AddLiquidityLayout,
  Text,
  MarginDiv,
  Row,
  Col,
  TitleLayout,
  ButtonBox,
  ButtonItem,
  EnterButton,
  PoolDetail,
} from "./AddLiquidity.styled";

import { Go, Back, FTR, Binance, Plus, DropUp, Eth, Copy } from "assets/icon";
import { CardSelector } from "ui/elements/CardSelector";

const PoolSelectorBar: React.FC<{ data: Function }> = ({ data }) => {
  const [show, setShow] = useState(false);
  const list = [
    { name: "Group A", value: 9577.514455 },
    { name: "Group B", value: 5084.7876 },
  ];
  const COLORS = ["#0177FB", "#FFD95C"];
  const [toInput, setToInput] = useState(0);
  const [fromInput, setFromInput] = useState(0);
  return (
    <AddLiquidityLayout>
      <TitleLayout>
        <Row onClick={() => data(false)}>
          <Back />
        </Row>
        <Go />
      </TitleLayout>
      <MarginDiv top={16}>
        <ButtonBox>
          <ButtonItem active={!show} onClick={() => setShow(false)}>
            Add
          </ButtonItem>
          <ButtonItem active={show} onClick={() => setShow(true)}>
            Remove
          </ButtonItem>
        </ButtonBox>
      </MarginDiv>
      {!show ? (
        <>
          <MarginDiv top={24}>
            <Row right={true}>
              <Text color="white" size={14} weight="normal">
                Available: 500
              </Text>
            </Row>
          </MarginDiv>
          <MarginDiv top={8}>
            <CardSelector
              icon={FTR}
              text="FTR"
              value={400}
              getvalue={setFromInput}
            ></CardSelector>
          </MarginDiv>
          <MarginDiv top={16}>
            <Row center={true}>
              <Plus />
            </Row>
          </MarginDiv>
          <MarginDiv top={-12}>
            <Row right={true}>
              <Text color="white" size={14} weight="normal">
                Available: 500
              </Text>
            </Row>
          </MarginDiv>
          <MarginDiv top={8}>
            <CardSelector
              icon={Binance}
              text="BUSD"
              value={129.16706043}
              getvalue={setToInput}
            ></CardSelector>
          </MarginDiv>
          <MarginDiv top={24}>
            <Row space={true}>
              <Row>
                <Text color="#8B8CA7" weight="normal" size={14}>
                  Support single-token supply
                </Text>
              </Row>
              <Row>
                <Text color="#8B8CA7" weight="normal" size={14}>
                  More
                </Text>
                <MarginDiv left={8}>
                  <DropUp></DropUp>
                </MarginDiv>
              </Row>
            </Row>
          </MarginDiv>
          <MarginDiv top={16}>
            <Row>
              <Text color="#8B8CA7" weight="normal" size={14}>
                My Liquidity (share 2.45%)
              </Text>
            </Row>
          </MarginDiv>
          <MarginDiv top={8}>
            <Text color="white" weight="600" size={16}>
              My Liquidity (share 2.45%)
            </Text>
          </MarginDiv>
          <MarginDiv top={24}>
            <EnterButton>Enter An Amount</EnterButton>
          </MarginDiv>
        </>
      ) : (
        <>
          <MarginDiv top={24}>
            <Row right={true}>
              <Text color="white" size={14} weight="normal">
                Available: 500
              </Text>
            </Row>
          </MarginDiv>
          <MarginDiv top={8}>
            <CardSelector
              icon={Eth}
              text="ETH"
              value={0}
              getvalue={setToInput}
            ></CardSelector>
          </MarginDiv>
          <MarginDiv top={16} bottom={84}>
            <PoolDetail>
              <Text size={14} color="#8B8CA7" weight="normal">
                Pool
              </Text>
              <MarginDiv top={8} bottom={16}>
                <Row>
                  <Text size={16} color="white" weight="600">
                    0x75c2...ff34
                  </Text>
                  <Go></Go>
                  <Copy></Copy>
                </Row>
              </MarginDiv>
              <Text size={14} color="#8B8CA7" weight="normal">
                Total Liquidity
              </Text>
              <MarginDiv top={8}>
                <Text size={16} color="white" weight="600">
                  9,601.09004 ETH / 10,773,969.7918 USDC
                </Text>
              </MarginDiv>
            </PoolDetail>
          </MarginDiv>
          <EnterButton>Enter An Amount</EnterButton>
        </>
      )}
    </AddLiquidityLayout>
  );
};
export default PoolSelectorBar;
