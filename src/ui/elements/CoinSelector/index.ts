import dynamic from "next/dynamic";
//export

export const CoinSelector = dynamic(
  () => import("./CoinSelector/CoinSelector")
);
export const CoinSelectorBar = dynamic(
  () => import("./CoinSelector/CoinSelectorBar")
);
