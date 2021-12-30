import dynamic from "next/dynamic";
//export

export const AddLiquidity = dynamic(
  () => import("./AddLiquidity/AddLiquidity")
);
