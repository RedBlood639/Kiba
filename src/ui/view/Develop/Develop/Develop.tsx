import React, { useState } from "react";
import {
  PageLayout,
  Header,
  Container,
  Row,
  Col,
  Text,
  MarginDiv,
  ButtonItem1,
  ButtonItem2,
  SearchBar,
  SearchInput,
  Table,
  Content,
  ContentItem,
  MobileHeader,
  MobileFooter,
  TableLayout,
  ContentItemGroup,
} from "./Develop.styled";

import { Menu } from "ui/templates/Menu";
import { WalletConnectMenu } from "ui/templates/Menu";
import { Analystis, Rocket, Search } from "assets/icon";
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
        <Row space={true}>
          <Text weight="600" size={18} lineHeight={28} color="white">
            My Token List
          </Text>
          <ButtonItem1>Create A Token</ButtonItem1>
        </Row>
        <SearchBar>
          <MarginDiv right={8}>
            <Search iSize={{ x: 24, y: 24 }}></Search>
          </MarginDiv>
          <SearchInput placeholder="Search by token symbols, name or dareess"></SearchInput>
        </SearchBar>
        <TableLayout>
          <Table>
            <thead>
              <tr>
                <th>Token</th>
                <th>Token Name</th>
                <th>Total Issuance</th>
                <th>Holders</th>
                <th>Price/Market Cap/Liquidity</th>
                <th>Balance</th>
                <th>Management Operation</th>
              </tr>
            </thead>
          </Table>
        </TableLayout>
        <MarginDiv top={24} left={16}>
          <Text weight="600" color="white" size={16}>
            No result found
          </Text>
        </MarginDiv>
        <Content>
          <ContentItemGroup>
            <ContentItem>
              <MarginDiv bottom={8}>
                <Rocket />
              </MarginDiv>
              <Text weight="600" size={16} color="white">
                For Developers
              </Text>
              <Text weight="400" size={14} color="#8B8CA7">
                You can use the token creation function to create test tokens
                and tokens for distribution to speed up development.
              </Text>
            </ContentItem>
            <ContentItem>
              <MarginDiv bottom={8}>
                <Analystis />
              </MarginDiv>
              <Text weight="600" size={16} color="white">
                Save 25% on Gas
              </Text>
              <Text weight="400" size={14} color="#8B8CA7">
                DEX does not charge you any fees for this token creation
                service, and it also saves you 25% in gas costs compared to
                other tools.
              </Text>
            </ContentItem>
          </ContentItemGroup>
          <MarginDiv top={40}>
            <ButtonItem2>Create A Token</ButtonItem2>
          </MarginDiv>
        </Content>
      </Container>
      <MobileFooter>
        <FooterMenu />
      </MobileFooter>
    </PageLayout>
  );
};
export default Vftr;
