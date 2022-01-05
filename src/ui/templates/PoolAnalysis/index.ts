import dynamic from "next/dynamic";

export const PoolAnalysis = dynamic(
  () => import("./PoolAnalysis/PoolAnalysis")
);
