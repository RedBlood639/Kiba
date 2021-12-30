import React, { useState, useEffect } from "react";
import {
  CoinSelectorBarLayout,
  Text,
  MarginDiv,
  Row,
  TitleLayout,
  SearchBar,
  List,
  ListItem,
  SearchInput,
} from "./CoinSelectorBar.styled";
import { CoinSelectorBarData, CoinItem } from "Types/components/Coin";
import { FTR, Eth, USDC, Inch, AAVE, AMPL, Back, Search } from "assets/icon";

const listdata: CoinItem[] = [
  { icon: FTR, text: "FTR", amount: 0 },
  { icon: Eth, text: "FTR", amount: 0 },
  { icon: USDC, text: "FTR", amount: 0 },
  { icon: Inch, text: "FTR", amount: 0 },
  { icon: AAVE, text: "FTR", amount: 0 },
  { icon: AMPL, text: "FTR", amount: 0 },
];

const CoinSelectorBar: React.FC<{ data: CoinSelectorBarData }> = ({ data }) => {
  return (
    <CoinSelectorBarLayout>
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
      <MarginDiv top={8}>
        <List>
          {listdata.map((Item, index) => (
            <ListItem key={`MenuItem_${index}`}>
              <Row>
                <Item.icon />
                <Text color="white" size={16} weight="600">
                  {Item.text}
                </Text>
              </Row>
              <Text color="#8B8CA7" size={14} weight="normal">
                {Item.amount}
              </Text>
            </ListItem>
          ))}
        </List>
      </MarginDiv>
    </CoinSelectorBarLayout>
  );
};
export default CoinSelectorBar;
