import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Close: React.FC<IconProps> = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="11.9998"
        cy="12.0001"
        r="9.00375"
        fill="#E33319"
        stroke="#E33319"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.44238 12.3392L10.6103 14.5071L10.5963 14.4931L15.4873 9.60205"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Close;
