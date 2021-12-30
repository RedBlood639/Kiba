import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const BUSD: React.FC<IconProps> = ({ iSize = { x: 32, y: 32 } }) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.9602 2.66663L19.2539 6.03964L10.9602 14.3333L7.66656 11.0396L15.9602 2.66663Z"
        fill="#F0B90B"
        stroke="#F0B90B"
      />
      <path
        d="M20.9602 7.66663L24.2539 11.0396L10.9602 24.3333L7.66656 21.0396L20.9602 7.66663Z"
        fill="#F0B90B"
        stroke="#F0B90B"
      />
      <path
        d="M5.9603 12.6666L9.25395 16.0396L5.9603 19.3333L2.66665 16.0396L5.9603 12.6666Z"
        fill="#F0B90B"
        stroke="#F0B90B"
      />
      <path
        d="M25.9603 12.6666L29.254 16.0396L15.9603 29.3333L12.6667 26.0396L25.9603 12.6666Z"
        fill="#F0B90B"
        stroke="#F0B90B"
      />
    </svg>
  );
};
export default BUSD;
