import React, { useEffect, useState } from "react";

import {
  MenuItemLayout,
  IconLayout,
  ItemLayout,
} from "./MenuItem_Normal.styled";

import { Dropdown } from "assets/icon";

import { SubMenu } from "ui/templates/Menu";

import { MenuItemData } from "Types/components/Menu";

import { useRouter } from "hooks";
import { useLocation } from "react-router-dom";

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
        {menuItem.dropdown ? (
          <>
            <IconLayout>
              <Dropdown iSize={{ x: 8, y: 4 }} />
            </IconLayout>
          </>
        ) : (
          <></>
        )}
      </ItemLayout>
      <SubMenu subMenuItems={menuItem.subMenuItems} hoverItem={show} />
    </MenuItemLayout>
  );
};
export default MenuItem_Normal;
