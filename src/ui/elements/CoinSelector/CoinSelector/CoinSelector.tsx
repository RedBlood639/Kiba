import React, { useState, useEffect } from "react";
import {
  CoinSelectorLayout,
  Text,
  MarginDiv,
  Row,
  Col,
} from "./CoinSelector.styled";
import { CoinSelectorData } from "Types/components/Coin";
import { Dropdown } from "assets/icon";

const CoinSelector: React.FC<{ data: CoinSelectorData }> = ({ data }) => {
  return (
    <CoinSelectorLayout onClick={() => data.selectFunction(true)}>
      <MarginDiv>
        <Row>
          <MarginDiv right={8}>
            <data.icon iSize={{ x: 24, y: 24 }} />
          </MarginDiv>
          <Text color="white" weight="600" size={14}>
            {data.text}
          </Text>
        </Row>
      </MarginDiv>
      <Dropdown></Dropdown>
    </CoinSelectorLayout>
  );
};
export default CoinSelector;
