import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Dropdown: React.FC<IconProps> = ({
  iColor = "white",
  iSize = { x: 11, y: 6 },
}) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 11 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.40875 1L5.40875 5L9.40875 1"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Dropdown;
