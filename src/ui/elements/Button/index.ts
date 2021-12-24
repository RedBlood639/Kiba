import dynamic from "next/dynamic";
//export

export const WalletConnectButton = dynamic(
  () => import("./WalletConnectButton/WalletConnectButton")
);
export const MenuButton = dynamic(() => import("./MenuButton/MenuButton"));
