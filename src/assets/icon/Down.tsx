import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Down: React.FC<IconProps> = () => {
  return (
    <svg
      width="27"
      height="26"
      viewBox="0 0 27 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 13V13C1.5 6.372 6.872 1 13.5 1V1C20.128 1 25.5 6.372 25.5 13V13C25.5 19.628 20.128 25 13.5 25V25C6.872 25 1.5 19.628 1.5 13Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5 18.3333V7.66663"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.5 14.3334L13.5 18.3334L9.5 14.3334"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Down;
