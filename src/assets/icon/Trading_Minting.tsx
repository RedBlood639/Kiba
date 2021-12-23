import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Trading_Minting: React.FC<IconProps> = ({
  iColor = "#E33319",
  iSize = { x: 32, y: 32 },
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
        d="M0.909241 15.9995C0.909241 7.16294 8.07268 -0.00050354 16.9092 -0.00050354C25.7458 -0.00050354 32.9092 7.16294 32.9092 15.9995C32.9092 24.8361 25.7458 31.9995 16.9092 31.9995C8.07268 31.9995 0.909241 24.8361 0.909241 15.9995Z"
        fill="#3B3C4E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.206 11.851H8.61296C8.0405 11.851 7.5759 12.3156 7.5759 12.8881V14.9622C7.5759 15.5347 8.0405 15.9993 8.61296 15.9993H25.206C25.7785 15.9993 26.2431 15.5347 26.2431 14.9622V12.8881C26.2431 12.3156 25.7785 11.851 25.206 11.851Z"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9095 25.3329V11.851"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.7424 10.4116C19.6245 11.5752 17.8646 11.851 17.0121 11.851"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0121 11.851C17.0121 11.851 16.4998 8.61954 17.7598 7.30869"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.7424 10.4115C21.5659 9.55493 21.5659 8.16526 20.7424 7.30865C19.919 6.45203 18.5843 6.45203 17.7609 7.30865"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0765 10.4116C14.1945 11.5752 15.9544 11.851 16.8068 11.851"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8068 11.851C16.8068 11.851 17.3191 8.61954 16.0591 7.30869"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.0764 10.4115C12.253 9.55493 12.253 8.16526 13.0764 7.30865C13.8999 6.45203 15.2346 6.45203 16.058 7.30865"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.1689 15.9993V24.2958C24.1689 24.8683 23.7043 25.3329 23.1318 25.3329H10.687C10.1146 25.3329 9.64996 24.8683 9.64996 24.2958V15.9993"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Trading_Minting;
