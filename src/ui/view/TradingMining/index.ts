import dynamic from "next/dynamic";
//export

export const TradingMining = dynamic(
  () => import("./TradingMining/TradingMining")
);
