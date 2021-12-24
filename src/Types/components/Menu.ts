export interface SubMenuItemData {
  subIcon: any;
  subTitle: string;
  subDetail: string;
}

export interface MenuItemData {
  title: string;
  dropdown: boolean;
  subMenuItems: SubMenuItemData[];
}
