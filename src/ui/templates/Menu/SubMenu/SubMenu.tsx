import React from "react";
import { SubMenuLayout } from "./SubMenu.styled";
import { SubMenuItemData } from "Types/components/Menu";
import { MenuItem_Dropdown } from "ui/elements/MenuItem";

const SubMenu: React.FC<{
  subMenuItems: SubMenuItemData[];
  hoverItem: boolean;
}> = ({ subMenuItems, hoverItem }) => {
  return (
    <SubMenuLayout displayMenu={hoverItem}>
      {subMenuItems.map((Item, index) => (
        <MenuItem_Dropdown
          key={`SubMenuItem_${index}`}
          menuItem={Item}
        ></MenuItem_Dropdown>
      ))}
    </SubMenuLayout>
  );
};
export default SubMenu;
