import React from "react";
import { MenuLayout } from "./Menu.styled";
import { MenuItem_Normal } from "ui/elements/MenuItem";
import { MenuItemData } from "Types/components/Menu";

import {
  VFTR,
  Liquidity_Minting,
  Trading_Minting,
  Create_A_Pool,
  Create_a_Token,
} from "assets/icon";

const MenuData: MenuItemData[] = [
  { title: "Stake", dropdown: false, subMenuItems: [] },
  { title: "Liquidity", dropdown: false, subMenuItems: [] },
  {
    title: "Minting",
    dropdown: true,
    subMenuItems: [
      {
        subIcon: Liquidity_Minting,
        subTitle: "Liquidity Minting",
        subDetail: "Earn FTR rewards by staking assets for market making",
      },
      {
        subIcon: Trading_Minting,
        subTitle: "Trading Minting",
        subDetail: "Successfully complete a trade to get a FTR airdrop",
      },
      {
        subIcon: VFTR,
        subTitle: "vFTR",
        subDetail: "Mint vFTR to earn more DoDo",
      },
    ],
  },
  {
    title: "Developer",
    dropdown: true,
    subMenuItems: [
      {
        subIcon: Create_a_Token,
        subTitle: "Create a Token",
        subDetail: "Create your own tokens with one click. No coding required!",
      },
      {
        subIcon: Create_A_Pool,
        subTitle: "Create A Pool",
        subDetail:
          "Create liquidity makets for free and customize your market making strategies",
      },
    ],
  },
];
const Menu = () => {
  return (
    <MenuLayout>
      {MenuData.map((Item, index) => (
        <MenuItem_Normal
          key={`MenuItem_${index}`}
          menuItem={Item}
        ></MenuItem_Normal>
      ))}
    </MenuLayout>
  );
};
export default Menu;
