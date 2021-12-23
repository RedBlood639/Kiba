import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Signal: React.FC<IconProps> = ({
  iColor = "red",
  iSize = { x: 14, y: 14 },
}) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 7C10 8.65685 8.65685 10 7 10C5.34315 10 4 8.65685 4 7C4 5.34315 5.34315 4 7 4C8.65685 4 10 5.34315 10 7Z"
        fill={iColor}
      />
    </svg>
  );
};
export default Signal;
