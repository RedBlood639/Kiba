import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Refresh: React.FC<IconProps> = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 4H7C3.686 4 1 6.686 1 10C1 11.912 1.897 13.611 3.29 14.71"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 16H13C16.314 16 19 13.314 19 10C19 8.08804 18.103 6.38904 16.71 5.29004"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.5 13.5L7 16L9.5 18.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.5 6.5L13 4L10.5 1.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Refresh;
