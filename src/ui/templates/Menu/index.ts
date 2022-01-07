import dynamic from "next/dynamic";
//export

export const Menu = dynamic(() => import("./Menu/Menu"));
export const SubMenu = dynamic(() => import("./SubMenu/SubMenu"));
export const WalletConnectMenu = dynamic(
  () => import("./WalletConnectMenu/WalletConnect")
);
export const MobileMenu = dynamic(() => import("./MobileMenu/MobileMenu"));
export const FooterMenu = dynamic(() => import("./FooterMenu/FooterMenu"));
export const MobileSubMenu = dynamic(
  () => import("./MobileSubMenu/MobileSubMenu")
);
