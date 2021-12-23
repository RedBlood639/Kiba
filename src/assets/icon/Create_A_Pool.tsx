import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Create_A_Pool: React.FC<IconProps> = ({
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
        d="M0.40918 15.9995C0.40918 7.16294 7.57262 -0.00050354 16.4092 -0.00050354V-0.00050354C25.2457 -0.00050354 32.4092 7.16294 32.4092 15.9995V15.9995C32.4092 24.8361 25.2457 31.9995 16.4092 31.9995V31.9995C7.57262 31.9995 0.40918 24.8361 0.40918 15.9995V15.9995Z"
        fill="#3B3C4E"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.9727 25.3328H9.14988C8.00395 25.3328 7.07581 24.4047 7.07581 23.2588V13.4359C7.07581 12.8863 7.29462 12.3585 7.68351 11.9696L12.3792 7.27387C12.7681 6.88498 13.296 6.66617 13.8456 6.66617H23.6684C24.8143 6.66617 25.7425 7.59432 25.7425 8.74024V18.5631C25.7425 19.1127 25.5237 19.6405 25.1348 20.0294L20.4391 24.7251C20.0502 25.114 19.5223 25.3328 18.9727 25.3328V25.3328Z"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.6906 19.1106H15.372C14.2261 19.1106 13.298 18.1825 13.298 17.0365V6.74706"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.15051 12.8884H17.4462C18.5921 12.8884 19.5203 13.8165 19.5203 14.9625V25.2644"
        stroke={iColor}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Create_A_Pool;
