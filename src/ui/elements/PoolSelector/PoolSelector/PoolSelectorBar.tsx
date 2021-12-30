import React, { useState, useEffect } from "react";
import { PieChart, Pie, Cell } from "recharts";
import {
  PoolSelectorBarLayout,
  Text,
  MarginDiv,
  Row,
  Col,
  TitleLayout,
  SearchBar,
  SearchInput,
  ChartContainer,
  SplitLine,
} from "./PoolSelectorBar.styled";
import { PoolSelectorBarData } from "Types/components/Pool";
import { Single, DropUp, Back, Search, Checked, Point } from "assets/icon";

const PoolSelectorBar: React.FC<{ data: PoolSelectorBarData }> = ({ data }) => {
  const list = [
    { name: "Group A", value: 9577.514455 },
    { name: "Group B", value: 5084.7876 },
  ];
  const COLORS = ["#0177FB", "#FFD95C"];
  return (
    <PoolSelectorBarLayout>
      <TitleLayout>
        <Row onClick={() => data.selectFunction(false)}>
          <Back />
        </Row>
        <Text color="white" weight="600" size={18}>
          Select A Pair
        </Text>
      </TitleLayout>
      <MarginDiv top={16}>
        <SearchBar>
          <Search />
          <SearchInput placeholder="Enter the token symbol or address" />
        </SearchBar>
      </MarginDiv>
      <ChartContainer>
        <Row space={true}>
          <Text color="white" weight="600" size={14}>
            0x75c2...ff34
          </Text>
          <Checked />
        </Row>
        <MarginDiv top={24} bottom={24}>
          <Row>
            <PieChart width={88} height={88}>
              <Pie
                data={list}
                cx={41}
                cy={41}
                labelLine={false}
                outerRadius={41}
                fill="#8884d8"
                dataKey="value"
              >
                {list.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>
            <MarginDiv>
              <Col>
                <Row>
                  <Point />
                  <Text color="white" size={14} weight="normal">
                    9,577.514455 ETH (68.65%)
                  </Text>
                </Row>
                <MarginDiv top={16}>
                  <Row>
                    <Point iColor="#FFD95C" />
                    <Text color="white" size={14} weight="normal">
                      10,831,937.7876 USDC (13.35%)
                    </Text>
                  </Row>
                </MarginDiv>
              </Col>
            </MarginDiv>
          </Row>
        </MarginDiv>
        <SplitLine></SplitLine>
        <MarginDiv top={16}>
          <Row space={true}>
            <Row>
              <MarginDiv right={8}>
                <Single></Single>
              </MarginDiv>
              <Text color="#8B8CA7" weight="normal" size={14}>
                Single
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
          <Text color="#8B8CA7" weight="normal" size={14}>
            Single token market making
          </Text>
        </MarginDiv>
        <MarginDiv top={8}>
          <Text color="#8B8CA7" weight="normal" size={14}>
            Fee Rate = 0%
          </Text>
        </MarginDiv>
        <MarginDiv top={8}>
          <Text color="#8B8CA7" weight="normal" size={14}>
            Slippage Coefficient = 0.8
          </Text>
        </MarginDiv>
        <MarginDiv top={8}>
          <Row space={true}>
            <Text color="#8B8CA7" weight="normal" size={14}>
              Created by 0x95c4...1cb0
            </Text>
            <Text color="#8B8CA7" weight="normal" size={14}>
              2020/8/7
            </Text>
          </Row>
        </MarginDiv>
      </ChartContainer>
    </PoolSelectorBarLayout>
  );
};
export default PoolSelectorBar;
