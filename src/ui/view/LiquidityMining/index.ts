import dynamic from "next/dynamic";
//export

export const LiquidityMining = dynamic(
  () => import("./LiquidityMining/LiquidityMining")
);
