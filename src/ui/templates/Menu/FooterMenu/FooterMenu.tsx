import React, { useState } from "react";
import { MenuLayout, ItemGroup } from "./FooterMenu.styled";

import { MenuItem_Footer } from "ui/elements/MenuItem";
import { MenuItemData } from "Types/components/Menu";

import { Header } from "assets/icon";

const MenuData: MenuItemData[] = [
  { title: "Stake", dropdown: false, subMenuItems: [], router: "stake" },
  {
    title: "Liquidity",
    dropdown: false,
    subMenuItems: [],
    router: "liquidity",
  },
  {
    title: "Minting",
    dropdown: true,
    subMenuItems: [
      {
        subIcon: Header.LiquidityMinting,
        subTitle: "Liquidity Minting",
        subDetail: "Earn FTR rewards by staking assets for market making",
        router: "liquidityMining",
      },
      {
        subIcon: Header.TradingMinting,
        subTitle: "Trading Minting",
        subDetail: "Successfully complete a trade to get a FTR airdrop",
        router: "tradingMining",
      },
      {
        subIcon: Header.VFTR,
        subTitle: "vFTR",
        subDetail: "Mint vFTR to earn more DoDo",
        router: "vftr",
      },
    ],
    router: "none",
  },
  {
    title: "Developer",
    dropdown: true,
    subMenuItems: [
      {
        subIcon: Header.CreateAToken,
        subTitle: "Create a Token",
        subDetail: "Create your own tokens with one click. No coding required!",
        router: "develop",
      },
      {
        subIcon: Header.CreateAPool,
        subTitle: "Create A Pool",
        subDetail:
          "Create liquidity makets for free and customize your market making strategies",
        router: "pool",
      },
    ],
    router: "none",
  },
];

const Menu = () => {
  const [active, setActive] = useState(0);
  return (
    <MenuLayout>
      <ItemGroup>
        <div></div>
        {MenuData.map((Item, index) => (
          <MenuItem_Footer
            key={`MenuItem_${index}`}
            index={index}
            menuItem={Item}
            active={active}
            getActive={setActive}
          ></MenuItem_Footer>
        ))}
        <div></div>
      </ItemGroup>
    </MenuLayout>
  );
};
export default Menu;
