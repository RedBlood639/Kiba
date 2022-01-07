import dynamic from "next/dynamic";
//export

export const MenuItem_Dropdown = dynamic(
  () => import("./Dropdown/MenuItem_Dropdown")
);
export const MenuItem_Normal = dynamic(
  () => import("./Normal/MenuItem_Normal")
);
export const MenuItem_Footer = dynamic(
  () => import("./Footer/MenuItem_Footer")
);
