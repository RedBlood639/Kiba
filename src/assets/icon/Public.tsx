import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Inch: React.FC<IconProps> = ({ iSize = { x: 16, y: 16 } }) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.6667 14H3.33333C2.59667 14 2 13.4033 2 12.6667V3.33333C2 2.59667 2.59667 2 3.33333 2H12.6667C13.4033 2 14 2.59667 14 3.33333V12.6667C14 13.4033 13.4033 14 12.6667 14Z"
        stroke="#0177FB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.64994 4.96467C10.5612 5.8759 10.5612 7.35328 9.64994 8.2645C8.73871 9.17573 7.26133 9.17573 6.35011 8.2645C5.43888 7.35328 5.43888 5.8759 6.35011 4.96467C7.26133 4.05344 8.73871 4.05344 9.64994 4.96467"
        stroke="#0177FB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6087 12.021C11.4907 11.7237 11.3074 11.457 11.0727 11.2397V11.2397C10.676 10.8717 10.1574 10.667 9.61602 10.667C8.71335 10.667 7.28669 10.667 6.38402 10.667C5.84269 10.667 5.32402 10.8717 4.92669 11.2397V11.2397C4.69202 11.457 4.50935 11.7237 4.39069 12.021"
        stroke="#0177FB"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Inch;
