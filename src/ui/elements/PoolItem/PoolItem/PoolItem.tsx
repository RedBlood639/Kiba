import React, { useEffect, useState } from "react";

import {
  PoolItemLayout,
  MarginDiv,
  Text,
  Row,
  Col,
  IconLayout,
  ButtonItem,
} from "./PoolItem.styled";

import { Claim } from "assets/icon";

import { PoolItemData } from "Types/components/PoolItem";

const MenuItem_Normal: React.FC<{
  data: PoolItemData;
}> = ({ data }) => {
  return (
    <PoolItemLayout>
      <Row>
        <IconLayout zIndex={2}>
          <data.firstCoinIcon iSize={{ x: 40, y: 40 }} />
        </IconLayout>
        <MarginDiv left={-18} right={16}>
          <IconLayout zIndex={1}>
            <data.secondCoinIcon iSize={{ x: 40, y: 40 }} />
          </IconLayout>
        </MarginDiv>
        <Text color="white" weight="600" size={18}>
          {data.firstCoinText + "-" + data.secondCoinText + " LP"}
        </Text>
      </Row>
      <MarginDiv top={16}>
        {data.secondCoinAmount != 0 ? (
          <>
            <Row space={true}>
              <Col>
                <Text weight="bold" size={24} color="white">
                  {data.firstCoinAmount + "%"}
                </Text>
                <Text weight="600" size={14} color="white">
                  {data.firstCoinText + " APR"}
                </Text>
              </Col>
              <Text weight="bold" size={34} color="white">
                {"/"}
              </Text>
              <Col>
                <Text weight="bold" size={24} color="white">
                  {data.secondCoinAmount + "%"}
                </Text>
                <Text weight="600" size={14} color="white">
                  {data.firstCoinText + " APR"}
                </Text>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row center={true}>
              <Col>
                <Text weight="bold" size={24} color="white">
                  {data.firstCoinAmount + "%"}
                </Text>
                <Text weight="600" size={14} color="white">
                  {data.firstCoinText + " APR"}
                </Text>
              </Col>
            </Row>
          </>
        )}
      </MarginDiv>
      <MarginDiv top={20}>
        <Row space={true}>
          <Text color="#8B8CA7" size={12} weight="normal">
            Reward Token
          </Text>

          {data.rewardTokenIcon.length > 1 ? (
            <>
              <Row>
                {data.rewardTokenIcon.map((Item, index) => (
                  <MarginDiv key={index} left={index * -9}>
                    <IconLayout zIndex={10 - index}>
                      <Item iSize={{ x: 24, y: 24 }}></Item>
                    </IconLayout>
                  </MarginDiv>
                ))}
              </Row>
            </>
          ) : (
            data.rewardTokenIcon.map((Item, index) => (
              <IconLayout zIndex={10 - index} key={index}>
                <Item iSize={{ x: 24, y: 24 }}></Item>
              </IconLayout>
            ))
          )}
        </Row>
      </MarginDiv>

      <MarginDiv top={16}>
        <Row space={true}>
          <Text color="#8B8CA7" size={12} weight="normal">
            Value Locked
          </Text>
          <Text color="white" size={12} weight="normal">
            {data.valueLocked}
          </Text>
        </Row>
      </MarginDiv>
      <MarginDiv top={16}>
        <Row space={true}>
          <Text color="#8B8CA7" size={12} weight="normal">
            My Share
          </Text>
          <Text color="white" size={12} weight="normal">
            {data.myShare}
          </Text>
        </Row>
      </MarginDiv>
      <MarginDiv top={16}>
        <Row space={true}>
          <Text color="#8B8CA7" size={12} weight="normal">
            Available Balance
          </Text>
          <Text color="white" size={12} weight="normal">
            {data.availableBalance}
          </Text>
        </Row>
      </MarginDiv>

      <MarginDiv top={16}>
        <Row space={true}>
          <Text color="#8B8CA7" size={12} weight="normal">
            My Reward
          </Text>
          <Row>
            <MarginDiv right={8}>
              <Text color="white" size={12} weight="normal">
                {data.myReward}
              </Text>
            </MarginDiv>
            <Claim />
          </Row>
        </Row>
      </MarginDiv>
      <MarginDiv top={20}>
        {data.buttonType == 2 ? (
          <ButtonItem width={true}>Stake</ButtonItem>
        ) : data.buttonType == 1 ? (
          <Row space={true}>
            <ButtonItem>{"Stake" + data.firstCoinText}</ButtonItem>
            <ButtonItem>{"Stake" + data.secondCoinText}</ButtonItem>
          </Row>
        ) : (
          <Row space={true}>
            <ButtonItem claim={true}>
              <MarginDiv>
                <Claim iSize={{ x: 24, y: 24 }} iColor="#E33319"></Claim>
              </MarginDiv>
              {"Claim"}
            </ButtonItem>
            <ButtonItem>{"Stake"}</ButtonItem>
          </Row>
        )}
      </MarginDiv>
    </PoolItemLayout>
  );
};
export default MenuItem_Normal;
