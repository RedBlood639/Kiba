import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Usdt: React.FC<IconProps> = ({ iSize = { x: 40, y: 40 } }) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36.6667 19.9999C36.6667 29.2049 29.205 36.6666 20 36.6666C10.7954 36.6666 3.33337 29.2049 3.33337 19.9999C3.33337 10.7951 10.7954 3.33325 20 3.33325C29.205 3.33325 36.6667 10.7951 36.6667 19.9999Z"
        fill="#1BA27A"
      />
      <path
        d="M27.8212 11.7375H12.0396V15.5475H18.0254V21.1475H21.8354V15.5475H27.8212V11.7375Z"
        fill="white"
      />
      <path
        d="M19.9685 21.7442C15.0169 21.7442 11.0024 20.9605 11.0024 19.9937C11.0024 19.027 15.0167 18.2432 19.9685 18.2432C24.9202 18.2432 28.9345 19.027 28.9345 19.9937C28.9345 20.9605 24.9202 21.7442 19.9685 21.7442ZM30.036 20.2855C30.036 19.0388 25.5287 18.0283 19.9685 18.0283C14.4085 18.0283 9.90088 19.0388 9.90088 20.2855C9.90088 21.3833 13.396 22.298 18.0275 22.5007V30.5397H21.8372V22.5038C26.5044 22.3075 30.036 21.389 30.036 20.2855Z"
        fill="white"
      />
    </svg>
  );
};
export default Usdt;