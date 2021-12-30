import React, { useState } from "react";
import {
  CoinChangeLayout,
  FromIcon,
  ToIcon,
  IconGroup,
  FromText,
  ToText,
} from "./CoinChange.style";
import { BUSD, USDC, Refresh } from "assets/icon";

const MenuButton = () => {
  return (
    <CoinChangeLayout>
      <IconGroup>
        <FromIcon>
          <USDC></USDC>
        </FromIcon>
        <ToIcon>
          <BUSD></BUSD>
        </ToIcon>
      </IconGroup>
      <FromText>BUSD/</FromText>
      <ToText>USDC</ToText>

      <Refresh />
    </CoinChangeLayout>
  );
};
export default MenuButton;
