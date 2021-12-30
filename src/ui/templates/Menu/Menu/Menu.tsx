import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "hooks";
import { MenuLayout, LogoLayout, ItemGroup } from "./Menu.styled";

import { MenuItem_Normal } from "ui/elements/MenuItem";
import { MenuItemData } from "Types/components/Menu";

import {
  VFTR,
  Liquidity_Minting,
  Trading_Minting,
  Create_A_Pool,
  Create_a_Token,
} from "assets/icon";

import LogoImage from "assets/img/logo.png";

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
        subIcon: Liquidity_Minting,
        subTitle: "Liquidity Minting",
        subDetail: "Earn FTR rewards by staking assets for market making",
        router: "liquidityMining",
      },
      {
        subIcon: Trading_Minting,
        subTitle: "Trading Minting",
        subDetail: "Successfully complete a trade to get a FTR airdrop",
        router: "tradingMining",
      },
      {
        subIcon: VFTR,
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
        subIcon: Create_a_Token,
        subTitle: "Create a Token",
        subDetail: "Create your own tokens with one click. No coding required!",
        router: "develop",
      },
      {
        subIcon: Create_A_Pool,
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
  const { move } = useRouter();
  const [active, setActive] = useState(0);
  return (
    <MenuLayout>
      <LogoLayout
        onClick={() => {
          move("/");
          setActive(0);
        }}
      >
        <Image src={LogoImage.src} width={146} height={66} alt="" />
      </LogoLayout>
      <ItemGroup>
        {MenuData.map((Item, index) => (
          <MenuItem_Normal
            key={`MenuItem_${index}`}
            index={index}
            menuItem={Item}
            active={active}
            getActive={setActive}
          ></MenuItem_Normal>
        ))}
      </ItemGroup>
    </MenuLayout>
  );
};
export default Menu;
