import dynamic from "next/dynamic";
//export

export const NetworkLabel = dynamic(
  () => import("./NetworkLabel/NetworkLable")
);
