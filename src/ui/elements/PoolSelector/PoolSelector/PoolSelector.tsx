import React, { useState, useEffect } from "react";
import { PoolSelectorLayout, Text } from "./PoolSelector.styled";

import { PoolSelectorData } from "Types/components/Pool";
import { Dropdown } from "assets/icon";

const WalletConnectButton: React.FC<{ data: PoolSelectorData }> = ({
  data,
}) => {
  return (
    <PoolSelectorLayout onClick={() => data.selectFunction(true)}>
      <Text color="white" weight="600" size={14}>
        {data.address}
      </Text>
      <Dropdown></Dropdown>
    </PoolSelectorLayout>
  );
};
export default WalletConnectButton;
