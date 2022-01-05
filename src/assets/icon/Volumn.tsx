import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Usdt: React.FC<IconProps> = ({ iSize = { x: 24, y: 24 } }) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75 18C4.75 17.5858 5.08579 17.25 5.5 17.25H18.5C18.9142 17.25 19.25 17.5858 19.25 18C19.25 18.4142 18.9142 18.75 18.5 18.75H5.5C5.08579 18.75 4.75 18.4142 4.75 18Z"
        fill="white"
      />
      <path
        d="M20 14H4C3.73478 14 3.48043 13.8946 3.29289 13.7071C3.10536 13.5196 3 13.2652 3 13V11C3 10.7348 3.10536 10.4804 3.29289 10.2929C3.48043 10.1054 3.73478 10 4 10H20C20.2652 10 20.5196 10.1054 20.7071 10.2929C20.8946 10.4804 21 10.7348 21 11V13C21 13.2652 20.8946 13.5196 20.7071 13.7071C20.5196 13.8946 20.2652 14 20 14Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.75 6C4.75 5.58579 5.08579 5.25 5.5 5.25H18.5C18.9142 5.25 19.25 5.58579 19.25 6C19.25 6.41421 18.9142 6.75 18.5 6.75H5.5C5.08579 6.75 4.75 6.41421 4.75 6Z"
        fill="white"
      />
    </svg>
  );
};
export default Usdt;
