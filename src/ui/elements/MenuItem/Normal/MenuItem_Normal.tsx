import { Dropdown } from "assets/icon";
import React, { useState } from "react";
import {
  MenuItemLayout,
  IconLayout,
  ItemLayout,
} from "./MenuItem_Normal.styled";
import { SubMenu } from "ui/templates/Menu";

import { MenuItemData } from "Types/components/Menu";

const MenuItem_Normal: React.FC<{ menuItem: MenuItemData }> = ({
  menuItem,
}) => {
  const [show, setShow] = useState(false);
  return (
    <MenuItemLayout
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <ItemLayout hover={show}>
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
