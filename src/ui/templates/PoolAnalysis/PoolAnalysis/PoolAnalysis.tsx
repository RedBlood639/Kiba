import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import {
  Layout,
  Row,
  Text,
  MarginDiv,
  Col,
  ProjectDiv,
  ButtonItem,
} from "./PoolAnalysis.styled";
import {
  Analysis,
  Plus2,
  Volumn,
  FTR,
  Usdt,
  USDC,
  Inch,
  AAVE,
  BTC,
  Dai,
  BUSD,
} from "assets/icon";
const CardChange = () => {
  return (
    <Layout>
      <MarginDiv bottom={29}>
        <Text color="white" size={18} lineHeight={28} weight="600">
          My Pool Analysis
        </Text>
      </MarginDiv>
      <Row space>
        <Col padding="16px" width={152}>
          <Analysis></Analysis>
          <MarginDiv top={8}>
            <Text weight="600" size={16} color="white">
              4,2 M
            </Text>
          </MarginDiv>
          <Text weight="400" size={14} color="#8B8CA7">
            Traders (24H)
          </Text>
        </Col>
        <Col padding="16px" width={152}>
          <Plus2></Plus2>
          <MarginDiv top={8}>
            <Text weight="600" size={16} color="white">
              $1,123.24K
            </Text>
          </MarginDiv>
          <Text weight="400" size={14} color="#8B8CA7">
            Total Liquidity
          </Text>
        </Col>
      </Row>
      <MarginDiv top={8} bottom={45}>
        <Col padding="16px" width={152}>
          <Volumn></Volumn>
          <MarginDiv top={8}>
            <Text weight="600" size={16} color="white">
              $30.44K
            </Text>
          </MarginDiv>
          <Text weight="400" size={14} color="#8B8CA7">
            Volume (24H)
          </Text>
        </Col>
      </MarginDiv>
      <ProjectDiv>
        <MarginDiv top={34} right={22}>
          <Col center>
            <Text weight="600" size={18} lineHeight={28} color="white">
              Project
            </Text>
            <Text weight="600" size={18} lineHeight={28} color="white">
              Tokens + FTR Tokens
            </Text>
            <MarginDiv top={18}>
              <Col center between={8}>
                <Row between={10}>
                  <FTR iSize={{ x: 24, y: 24 }} />
                  <BUSD iSize={{ x: 24, y: 24 }} />
                  <Usdt iSize={{ x: 24, y: 24 }} />
                  <USDC iSize={{ x: 24, y: 24 }} />
                  <Inch iSize={{ x: 24, y: 24 }} />
                </Row>
                <Row between={10}>
                  <AAVE iSize={{ x: 24, y: 24 }} />
                  <BTC iSize={{ x: 24, y: 24 }} />
                  <Dai iSize={{ x: 24, y: 24 }} />
                </Row>
              </Col>
            </MarginDiv>
          </Col>
        </MarginDiv>
      </ProjectDiv>
      <ButtonItem>Create a Pool</ButtonItem>
    </Layout>
  );
};
export default CardChange;
