import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Create_a_Token: React.FC<IconProps> = ({
  iColor = "#E33319",
  iSize = { x: 33, y: 32 },
}) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 33 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.40918 15.9995C0.40918 7.16294 7.57262 -0.00050354 16.4092 -0.00050354C25.2457 -0.00050354 32.4092 7.16294 32.4092 15.9995C32.4092 24.8361 25.2457 31.9995 16.4092 31.9995C7.57262 31.9995 0.40918 24.8361 0.40918 15.9995Z"
        fill="#3B3C4E"
      />
      <path
        d="M7.62483 13.8034V7.21518"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.9189 7.21518V11.6073"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2131 7.21518V8.31322"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2131 24.7838H7.62488"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.62488 21.4897H12.017"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.62488 18.1956H8.72292"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6052 7.21518H25.1935"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.1934 10.5093H20.8013"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.1935 13.8034H24.0955"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.1934 18.1956V24.7838"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.8994 24.7838V20.3917"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6052 24.7838V23.6858"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5269 15.9995L16.409 12.1174L20.2911 15.9995L16.409 19.8816L12.5269 15.9995Z"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Create_a_Token;
