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
  MobileHeader,
  MobileFooter,
  ContentLayout,
  TextGroup,
  Content,
  Detail,
} from "./Vftr.styled";

import { Menu } from "ui/templates/Menu";
import { WalletConnectMenu } from "ui/templates/Menu";
import { Help } from "assets/icon";
import { MobileMenu } from "ui/templates/Menu";
import { FooterMenu } from "ui/templates/Menu";

const Vftr = () => {
  return (
    <PageLayout>
      <Header>
        <Menu />
        <WalletConnectMenu />
      </Header>
      <MobileHeader>
        <MobileMenu />
      </MobileHeader>
      <Container>
        <Text
          color="white"
          font="Rubik"
          size={48}
          lineHeight={56}
          weight="bold"
          number={[768, 425]}
          responsive={[{ size: 38 }, { size: 35 }]}
        >
          vFTR Membership
        </Text>
        <MarginDiv top={24} bottom={8}>
          <Text
            color="white"
            size={18}
            lineHeight={28}
            weight="600"
            number={[]}
            responsive={[]}
          >
            Your Real-Time APY
          </Text>
        </MarginDiv>
        <Text
          color="#0177FB"
          font="Rubik"
          size={48}
          lineHeight={56}
          weight="bold"
          number={[]}
          responsive={[]}
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
          <ContentLayout>
            <TextGroup>
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
                  number={[]}
                  responsive={[]}
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
                  number={[]}
                  responsive={[]}
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
                  number={[]}
                  responsive={[]}
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
                  number={[]}
                  responsive={[]}
                >
                  0
                </Text>
              </Row>
              <Text
                color="white"
                size={14}
                weight="600"
                width={268}
                number={[768]}
                responsive={[{ center: true }]}
              >
                People have already become vFTR members
              </Text>
            </TextGroup>
            <Content>
              <MyvFTR>
                <Text
                  color="#0177FB"
                  weight="bold"
                  size={24}
                  lineHeight={36}
                  number={[]}
                  responsive={[]}
                >
                  0
                </Text>
                <Row>
                  <Text
                    color="white"
                    weight="600"
                    size={14}
                    number={[]}
                    responsive={[]}
                  >
                    My vFTR
                  </Text>
                  <IconLayout>
                    <Help iSize={{ x: 16, y: 16 }}></Help>
                  </IconLayout>
                </Row>
              </MyvFTR>
              <Membership>
                <Text
                  color="#0177FB"
                  weight="bold"
                  size={24}
                  lineHeight={36}
                  number={[]}
                  responsive={[]}
                >
                  -
                </Text>
                <Text
                  color="white"
                  weight="600"
                  size={14}
                  number={[]}
                  responsive={[]}
                >
                  Membership Rewards · vFTR
                </Text>
              </Membership>
            </Content>
          </ContentLayout>
        </MarginDiv>
        <MarginDiv top={40}>
          <Detail>
            <Col
              width={403}
              padding="16px"
              number={[450]}
              responsive={[{ width: 320 }]}
            >
              <Row space={true}>
                <Text
                  size={16}
                  weight="600"
                  color="white"
                  number={[]}
                  responsive={[]}
                >
                  Referrals
                </Text>
                <Text
                  size={16}
                  weight="600"
                  color="#0177FB"
                  number={[]}
                  responsive={[]}
                >
                  +0
                </Text>
              </Row>
              <Row right={true}>
                <Text
                  size={14}
                  weight="normal"
                  color="#8B8CA7"
                  number={[]}
                  responsive={[]}
                >
                  vDEX/month
                </Text>
              </Row>
            </Col>
            <Col
              width={403}
              padding="24px"
              between={16}
              number={[450]}
              responsive={[{ width: 320 }]}
            >
              <Text
                weight="600"
                size={16}
                color="white"
                number={[]}
                responsive={[]}
              >
                vFTR Stats
              </Text>
              <Row space={true}>
                <Text
                  color="white"
                  size={14}
                  weight="normal"
                  number={[]}
                  responsive={[]}
                >
                  Number of FTR Staked
                </Text>
                <Text
                  color="white"
                  size={14}
                  weight="normal"
                  number={[]}
                  responsive={[]}
                >
                  20,880,161.53
                </Text>
              </Row>
              <Row space={true}>
                <Text
                  color="white"
                  size={14}
                  weight="normal"
                  number={[]}
                  responsive={[]}
                >
                  vFTR Minted
                </Text>
                <Text
                  color="white"
                  size={14}
                  weight="normal"
                  number={[]}
                  responsive={[]}
                >
                  208,801.61
                </Text>
              </Row>
              <Row space={true}>
                <Text
                  color="white"
                  size={14}
                  weight="normal"
                  number={[]}
                  responsive={[]}
                >
                  Current Exit Fee Rate
                </Text>
                <Text
                  color="white"
                  size={14}
                  weight="normal"
                  number={[]}
                  responsive={[]}
                >
                  8.61%
                </Text>
              </Row>
              <Row space={true}>
                <Text
                  color="white"
                  size={14}
                  weight="normal"
                  number={[]}
                  responsive={[]}
                >
                  Exit membership fee income(vFTR)
                </Text>
                <Text
                  weight="600"
                  size={16}
                  color="#0177FB"
                  number={[]}
                  responsive={[]}
                >
                  5,259.43
                </Text>
              </Row>
            </Col>
          </Detail>
        </MarginDiv>
      </Container>
      <MobileFooter>
        <FooterMenu />
      </MobileFooter>
    </PageLayout>
  );
};
export default Vftr;
