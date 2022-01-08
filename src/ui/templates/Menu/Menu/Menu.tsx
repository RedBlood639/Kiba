import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "hooks";
import {
  MenuLayout,
  LogoLayout,
  ItemGroup,
  LogoDefault,
  Logo,
} from "./Menu.styled";

import { MenuItem_Normal } from "ui/elements/MenuItem";
import { MenuItemData } from "Types/components/Menu";

import { Header } from "assets/icon";

import LogoDefaultImage from "assets/img/logoDefault.png";
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
      // {
      //   subIcon: Header.VFTR,
      //   subTitle: "vFTR",
      //   subDetail: "Mint vFTR to earn more DoDo",
      //   router: "vftr",
      // },
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
        <LogoDefault>
          <Image src={LogoDefaultImage.src} width={146} height={66} alt="" />
        </LogoDefault>
        <Logo>
          <Image src={LogoImage.src} width={66} height={66} alt="" />
        </Logo>
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
