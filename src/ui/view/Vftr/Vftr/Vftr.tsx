import React, { useState } from "react";
import {
  PageLayout,
  Header,
  Container,
  Row,
  Col,
  Text,
  MarginDiv,
  ButtonItem,
  MyvFTR,
  Membership,
  IconLayout,
} from "./Vftr.styled";

import { Menu } from "ui/templates/Menu";
import { WalletConnectMenu } from "ui/templates/Menu";
import { Help } from "assets/icon";
const Vftr = () => {
  return (
    <PageLayout>
      <Header>
        <Menu />
        <WalletConnectMenu />
      </Header>
      <Container>
        <Text
          color="white"
          font="Rubik"
          size={48}
          lineHeight={56}
          weight="bold"
        >
          vFTR Membership
        </Text>
        <MarginDiv top={24} bottom={8}>
          <Text color="white" size={18} lineHeight={28} weight="600">
            Your Real-Time APY
          </Text>
        </MarginDiv>
        <Text
          color="#0177FB"
          font="Rubik"
          size={48}
          lineHeight={56}
          weight="bold"
        >
          130.92%
        </Text>
        <MarginDiv top={24}>
          <Row>
            <MarginDiv right={8}>
              <ButtonItem active={true}>Mint vFTR</ButtonItem>
            </MarginDiv>
            <ButtonItem>Redeem</ButtonItem>
          </Row>
        </MarginDiv>
        <MarginDiv top={64}>
          <Row>
            <Col>
              <Row between={16}>
                <Text
                  color="white"
                  font="Rubik"
                  weight="bold"
                  size={24}
                  lineHeight={36}
                  background="#23242F"
                  radius={16}
                  padding="16px"
                >
                  3
                </Text>
                <Text
                  color="white"
                  font="Rubik"
                  weight="bold"
                  size={24}
                  lineHeight={36}
                  background="#23242F"
                  radius={16}
                  padding="16px"
                >
                  2
                </Text>
                <Text
                  color="white"
                  font="Rubik"
                  weight="bold"
                  size={24}
                  lineHeight={36}
                  background="#23242F"
                  radius={16}
                  padding="16px"
                >
                  6
                </Text>
                <Text
                  color="white"
                  font="Rubik"
                  weight="bold"
                  size={24}
                  lineHeight={36}
                  background="#23242F"
                  radius={16}
                  padding="16px"
                >
                  0
                </Text>
              </Row>
              <Text color="white" size={14} weight="600" width={268}>
                People have already become vFTR members
              </Text>
            </Col>
            <MyvFTR>
              <Text color="#0177FB" weight="bold" size={24} lineHeight={36}>
                0
              </Text>
              <Row>
                <Text color="white" weight="600" size={14}>
                  My vFTR
                </Text>
                <IconLayout>
                  <Help iSize={{ x: 16, y: 16 }}></Help>
                </IconLayout>
              </Row>
            </MyvFTR>
            <Membership>
              <Text color="#0177FB" weight="bold" size={24} lineHeight={36}>
                -
              </Text>
              <Text color="white" weight="600" size={14}>
                Membership Rewards · vFTR
              </Text>
            </Membership>
          </Row>
        </MarginDiv>
        <MarginDiv top={40}>
          <Row between={24}>
            <Col width={403} padding="16px">
              <Row space={true}>
                <Text size={16} weight="600" color="white">
                  Referrals
                </Text>
                <Text size={16} weight="600" color="#0177FB">
                  +0
                </Text>
              </Row>
              <Row right={true}>
                <Text size={14} weight="normal" color="#8B8CA7">
                  vDEX/month
                </Text>
              </Row>
            </Col>
            <Col width={403} padding="24px" between={16}>
              <Text weight="600" size={16} color="white">
                vFTR Stats
              </Text>
              <Row space={true}>
                <Text color="white" size={14} weight="normal">
                  Number of FTR Staked
                </Text>
                <Text color="white" size={14} weight="normal">
                  20,880,161.53
                </Text>
              </Row>
              <Row space={true}>
                <Text color="white" size={14} weight="normal">
                  vFTR Minted
                </Text>
                <Text color="white" size={14} weight="normal">
                  208,801.61
                </Text>
              </Row>
              <Row space={true}>
                <Text color="white" size={14} weight="normal">
                  Current Exit Fee Rate
                </Text>
                <Text color="white" size={14} weight="normal">
                  8.61%
                </Text>
              </Row>
              <Row space={true}>
                <Text color="white" size={14} weight="normal">
                  Exit membership fee income(vFTR)
                </Text>
                <Text weight="600" size={16} color="#0177FB">
                  5,259.43
                </Text>
              </Row>
            </Col>
          </Row>
        </MarginDiv>
      </Container>
    </PageLayout>
  );
};
export default Vftr;
