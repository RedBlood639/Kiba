import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Back: React.FC<IconProps> = ({ iSize = { x: 40, y: 40 } }) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.9999 36.6666C29.2047 36.6666 36.6666 29.2047 36.6666 19.9999C36.6666 10.7952 29.2047 3.33325 19.9999 3.33325C10.7952 3.33325 3.33325 10.7952 3.33325 19.9999C3.33325 29.2047 10.7952 36.6666 19.9999 36.6666Z"
        fill="url(#paint0_linear_4032_11098)"
      />
      <path
        d="M27.2939 26.6408L21.6582 13.0154C21.3403 12.3109 20.8678 11.9673 20.245 11.9673H19.7467C19.1238 11.9673 18.6513 12.3109 18.3335 13.0154L15.8807 18.9518H14.025C13.4709 18.9561 13.0199 19.4029 13.0156 19.9613V19.9742C13.0199 20.5283 13.4709 20.9793 14.025 20.9836H15.0216L12.6805 26.6408C12.6376 26.7654 12.6118 26.8943 12.6118 27.0274C12.6118 27.3453 12.7106 27.5945 12.8867 27.7878C13.0628 27.9811 13.3163 28.0756 13.6342 28.0756C13.8446 28.0713 14.0465 28.0068 14.214 27.8823C14.3945 27.7577 14.519 27.5773 14.6178 27.3711L17.1952 20.9793H18.9821C19.5362 20.975 19.9872 20.5283 19.9915 19.9699V19.9441C19.9872 19.39 19.5362 18.9389 18.9821 18.9346H18.0285L19.9958 14.0334L25.3567 27.3668C25.4555 27.573 25.58 27.7534 25.7604 27.878C25.928 28.0025 26.1342 28.067 26.3403 28.0713C26.6582 28.0713 26.9073 27.9768 27.0878 27.7835C27.2682 27.5902 27.3627 27.341 27.3627 27.0231C27.367 26.8943 27.3455 26.7611 27.2939 26.6408Z"
        fill="white"
      />
      <defs>
        <linearGradient
          id="paint0_linear_4032_11098"
          x1="32.4263"
          y1="9.54401"
          x2="7.62634"
          y2="30.4107"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B6509E" />
          <stop offset="1" stopColor="#2EBAC6" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default Back;
