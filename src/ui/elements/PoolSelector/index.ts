import dynamic from "next/dynamic";
//export

export const PoolSelector = dynamic(
  () => import("./PoolSelector/PoolSelector")
);
export const PoolSelectorBar = dynamic(
  () => import("./PoolSelector/PoolSelectorBar")
);
