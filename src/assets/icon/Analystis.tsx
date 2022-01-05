import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Back: React.FC<IconProps> = ({ iSize = { x: 25, y: 24 } }) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5016 21.0035H18.5025C20.16 21.0035 21.5037 19.6598 21.5037 18.0022V15.001"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.49622 11V6.99832C3.49622 5.34078 4.83992 3.99707 6.49747 3.99707H8.4983"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="3.49622"
        y="17.252"
        width="3.00125"
        height="3.75156"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="6.4975"
        y="13"
        width="3.00125"
        height="8.00333"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="9.49872"
        y="15.251"
        width="3.00125"
        height="5.7524"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9196 5.64393V6.09546"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.0812 5.64393V6.09546"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.587 8.54554C18.319 8.68075 17.9535 8.80613 17.4996 8.80613C17.0226 8.80613 16.6399 8.66764 16.3695 8.52506"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 6.99959C12.5 9.76121 14.738 11.9992 17.4996 11.9992C20.2612 11.9992 22.5 9.76121 22.5 6.99959C22.5 4.23797 20.262 2 17.5004 2C14.7388 2 12.5 4.23797 12.5 6.99959Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Back;
