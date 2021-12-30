import dynamic from "next/dynamic";
//export

export const LiquidityDetail = dynamic(
  () => import("./LiquidityDetail/LiquidityDetail")
);
