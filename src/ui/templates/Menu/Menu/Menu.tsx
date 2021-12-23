import React from "react";
import { MenuLayout } from "./Menu.styled";

import { Dropdown } from "assets/icon";
import { Liquidity_Minting } from "assets/icon";
import { Trading_Minting } from "assets/icon";
import { VFTR } from "assets/icon";

interface SubMenuItemData {
  subIcon: any;
  subTitle: string;
  subDetail: string;
}

interface MenuItemData {
  title: string;
  dropdown: any;
  subMenuItems: SubMenuItemData[];
}

const MenuData: MenuItemData[] = [
  { title: "Stake", dropdown: false, subMenuItems: [] },
  { title: "Liquidity", dropdown: false, subMenuItems: [] },
  { title: "Minting", dropdown: Dropdown, subMenuItems: [] },
  { title: "Developer", dropdown: Dropdown, subMenuItems: [] },
];

const Home = () => {
  return (
    <MenuLayout>
      <Dropdown />
      <Liquidity_Minting />
      <Trading_Minting />
      <VFTR />
    </MenuLayout>
  );
};
export default Home;
