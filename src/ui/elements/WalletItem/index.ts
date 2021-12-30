import dynamic from "next/dynamic";
//export

export const WalletItem = dynamic(() => import("./WalletItem/WalletItem"));
