import React, { useState } from "react";
import {
  MenuLayout_dropdown,
  Grid_Item,
  Grid_titleItem,
  Grid_detailItem,
} from "./MenuItem_Dropdown.styled";
import { SubMenuItemData } from "Types/components/Menu";
import { useRouter } from "hooks";

const MenuItem_Dropdown: React.FC<{ menuItem: SubMenuItemData }> = ({
  menuItem,
}) => {
  const { move } = useRouter();
  const clickMenuItem = (router: string) => {
    if (router !== "none") {
      move(router);
    }
  };
  const [hoverItem, setHoverItem] = useState(false);
  return (
    <MenuLayout_dropdown
      onMouseEnter={() => setHoverItem(true)}
      onMouseLeave={() => setHoverItem(false)}
      onClick={() => clickMenuItem(menuItem.router)}
    >
      <Grid_Item>
        <menuItem.subIcon />
      </Grid_Item>
      <Grid_titleItem itemHover={hoverItem}>{menuItem.subTitle}</Grid_titleItem>
      <div></div>
      <Grid_detailItem itemHover={hoverItem}>
        {menuItem.subDetail}
      </Grid_detailItem>
    </MenuLayout_dropdown>
  );
};
export default MenuItem_Dropdown;
