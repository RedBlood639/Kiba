import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Go: React.FC<IconProps> = ({ iSize = { x: 24, y: 24 } }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.66666 12H15.6667"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M13 9L15.6667 12L13 15"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default Go;
