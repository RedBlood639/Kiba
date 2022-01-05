import React, { useState, useEffect } from "react";
import Switch from "react-switch";
import {
  Layout,
  Row,
  Text,
  PrizeBox,
  SplitLine,
  MarginDiv,
} from "./Trading.styled";
const CardChange = () => {
  const [switchChecked, setSwitchChecked] = useState(false);

  return (
    <Layout>
      <Row center={true}>
        <Text color="white" size={18} lineHeight={28} weight="600">
          Trading Minting
        </Text>
      </Row>
      <PrizeBox>
        <MarginDiv top={24} bottom={24}>
          <Text size={18} lineHeight={28} color="white" weight="600">
            Prize Pool
          </Text>
        </MarginDiv>
        <Text size={48} lineHeight={56} color="#0177FB" weight="bold">
          1518
        </Text>
        <MarginDiv top={4} bottom={24}>
          <Text size={16} lineHeight={24} color="white" weight="600">
            DEX
          </Text>
        </MarginDiv>
        <Row>
          <Text size={14} color="white" weight="600">
            Per block
          </Text>
          <MarginDiv right={8} left={8}>
            <Text size={14} weight="600" color="#0177FB">
              +3.0
            </Text>
          </MarginDiv>
          <Text size={14} color="white" weight="600">
            DEX
          </Text>
        </Row>
      </PrizeBox>
      <MarginDiv right={16} left={16} bottom={30}>
        <Row space={true}>
          <Text size={14} color="#8B8CA7" weight="normal">
            0xBAD7...E192
          </Text>
          <Row>
            <Text size={14} color="#8B8CA7" weight="600">
              Earned
            </Text>
            <MarginDiv right={8} left={8}>
              <Text size={14} weight="600" color="#0177FB">
                5
              </Text>
            </MarginDiv>
            <Text size={14} color="#8B8CA7" weight="600">
              DEX $17.38
            </Text>
          </Row>
        </Row>
      </MarginDiv>
      <SplitLine />
      <MarginDiv top={30} right={16} left={16} bottom={16}>
        <Row space={true}>
          <Text size={16} weight="600" color="white">
            Minting Mode
          </Text>
          <Switch
            checked={switchChecked}
            onChange={(checked) => setSwitchChecked(checked)}
            onColor="#86d3ff"
            offColor="#3B3C4E"
            onHandleColor="#2693e6"
            handleDiameter={24}
            uncheckedIcon={false}
            checkedIcon={false}
            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
            height={32}
            width={64}
          />
        </Row>
      </MarginDiv>
      <MarginDiv right={16} left={16} bottom={38}>
        <Text color="#8B8CA7" size={14} weight="normal">
          When Mining Mode is on, each transaction will receive 1% of the prize
          pool in rewards.
        </Text>
      </MarginDiv>
      <MarginDiv right={16} left={16}>
        <Row space={true}>
          <Text color="white" size={16} weight="600">
            Total Rewards
          </Text>
          <Text color="white" size={16} weight="600">
            -DEX
          </Text>
        </Row>
      </MarginDiv>
    </Layout>
  );
};
export default CardChange;
