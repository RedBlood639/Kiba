import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Refresh: React.FC<IconProps> = ({ iSize = { x: 24, y: 24 } }) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.x}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.714 6.83804C16.8911 8.01507 17.5523 9.61146 17.5523 11.276C17.5523 12.9406 16.8911 14.537 15.714 15.714C14.537 16.8911 12.9406 17.5523 11.276 17.5523C9.61146 17.5523 8.01507 16.8911 6.83804 15.714C5.661 14.537 4.99976 12.9406 4.99976 11.276C4.99976 9.61146 5.661 8.01507 6.83804 6.83804C8.01507 5.661 9.61146 4.99976 11.276 4.99976C12.9406 4.99976 14.537 5.661 15.714 6.83804"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19 19L15.71 15.71"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Refresh;
