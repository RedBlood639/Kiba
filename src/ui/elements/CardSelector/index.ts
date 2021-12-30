import dynamic from "next/dynamic";

export const CardSelector = dynamic(
  () => import("./CardSelector/CardSelector")
);
