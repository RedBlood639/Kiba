import React, { useState } from "react";

import { MenuItemLayout, ItemLayout } from "./MenuItem_Footer.styled";

import { MobileSubMenu } from "ui/templates/Menu";

import { MenuItemData } from "Types/components/Menu";

import { useRouter } from "hooks";

const MenuItem_Normal: React.FC<{
  menuItem: MenuItemData;
  active: number;
  getActive: Function;
  index: number;
}> = ({ menuItem, active, getActive, index }) => {
  const [show, setShow] = useState(false);
  const { move } = useRouter();
  const clickMenuItem = (router: string) => {
    if (router !== "none") {
      move(router);
      getActive(index + 1);
    }
  };
  return (
    <MenuItemLayout
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => clickMenuItem(menuItem.router)}
    >
      <ItemLayout hover={show} active={active == index + 1 ? true : false}>
        {menuItem.title}
      </ItemLayout>
      <MobileSubMenu subMenuItems={menuItem.subMenuItems} hoverItem={show} />
    </MenuItemLayout>
  );
};
export default MenuItem_Normal;
