import dynamic from "next/dynamic";
//export

export const Menu = dynamic(() => import("./Menu/Menu"));
export const SubMenu = dynamic(() => import("./SubMenu/SubMenu"));
export const WalletConnectMenu = dynamic(
  () => import("./WalletConnectMenu/WalletConnect")
);
