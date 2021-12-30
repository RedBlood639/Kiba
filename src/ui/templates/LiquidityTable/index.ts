import dynamic from "next/dynamic";
//export

export const LiquidityTable = dynamic(
  () => import("./LiquidityTable/LiquidityTable")
);
