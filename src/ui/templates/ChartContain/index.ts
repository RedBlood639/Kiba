import dynamic from "next/dynamic";
//export

export const ChartContain = dynamic(
  () => import("./ChartContain/ChartContain")
);
