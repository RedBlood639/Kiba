import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const VFTR: React.FC<IconProps> = ({
  iColor = "#E33319",
  iSize = { x: 32, y: 32 },
}) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.x}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.909241 15.9995C0.909241 7.16296 8.07268 -0.000488281 16.9092 -0.000488281C25.7458 -0.000488281 32.9092 7.16296 32.9092 15.9995C32.9092 24.8361 25.7458 31.9995 16.9092 31.9995C8.07268 31.9995 0.909241 24.8361 0.909241 15.9995Z"
        fill="#3B3C4E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5759 7.99951L17.2963 13.7199L23.0167 7.99951"
        fill="#3B3C4E"
      />
      <path
        d="M11.5759 7.99951L17.2963 13.7199L23.0167 7.99951"
        stroke={iColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.0167 22.6662L17.2963 16.9458L11.5759 22.6662"
        fill="#3B3C4E"
      />
      <path
        d="M23.0167 22.6662L17.2963 16.9458L11.5759 22.6662"
        stroke={iColor}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default VFTR;
