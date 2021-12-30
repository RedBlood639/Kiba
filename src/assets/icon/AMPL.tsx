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
        d="M3.35519 36.6666C3.33204 36.2035 3.32432 35.7404 3.34748 35.2774C3.50183 35.2311 3.65619 35.2002 3.81826 35.177C4.28134 35.0999 4.74441 34.9841 5.19204 34.8529C5.31553 34.8143 5.43901 34.768 5.5625 34.7217C6.15677 34.4902 6.68159 34.1043 7.08291 33.6103C7.36076 33.263 7.60001 32.8848 7.80839 32.4912C8.10167 31.951 8.35636 31.3876 8.58789 30.8165C9.05096 29.6588 9.51404 28.5088 9.96939 27.3512C11.5438 23.3688 13.1183 19.3864 14.6927 15.4039C16.1823 11.6145 17.6486 7.82503 19.0842 4.01242C19.115 3.93524 19.1459 3.85806 19.1768 3.78089C19.7093 3.63425 20.2264 3.47989 20.7667 3.33325C20.7975 3.41043 20.8284 3.47989 20.8516 3.54935C21.4613 5.24728 22.071 6.9452 22.673 8.65084C24.7491 14.4469 26.8252 20.2353 28.9553 26.0083C29.5418 27.5827 30.1284 29.1649 30.7227 30.7393C30.9542 31.3799 31.2321 32.0127 31.5485 32.6147C31.6874 32.8771 31.834 33.1241 31.9961 33.3711C32.4901 34.1429 33.2541 34.6908 34.1417 34.9224C34.6202 35.0458 35.0987 35.1462 35.5926 35.2079L35.9399 35.2619C35.9862 35.4163 35.9631 35.5629 35.9631 35.7096C35.9631 35.8562 35.9631 36.026 35.9631 36.1804C35.9708 36.3347 35.9631 36.4814 35.9554 36.6357C35.9091 36.6434 35.8705 36.6512 35.8242 36.6589C35.7701 36.6589 35.7161 36.6589 35.6621 36.6589H23.6145C23.5991 36.6357 23.5914 36.6048 23.5837 36.574C23.5837 36.1572 23.5837 35.7404 23.5837 35.3237C23.5837 35.3082 23.5914 35.2851 23.5991 35.2697C23.6994 35.2388 23.7998 35.2234 23.9078 35.2079C24.4095 35.1385 24.9034 35.0458 25.3974 34.9146C25.5903 34.8606 25.791 34.7912 25.9762 34.714C26.0688 34.6754 26.1614 34.6291 26.254 34.5751C26.7403 34.3049 26.9332 33.8805 26.8869 33.3402C26.8638 33.0932 26.8252 32.854 26.7557 32.6147C26.6554 32.2443 26.5242 31.8815 26.4007 31.5265C23.8692 24.4647 21.3686 17.3952 18.8912 10.3102C18.8681 10.233 18.8526 10.1481 18.7755 10.0786C18.7523 10.0941 18.7137 10.1095 18.6983 10.1249C18.6751 10.1635 18.6597 10.2021 18.652 10.2407C17.4403 13.7215 16.1514 17.1791 14.8702 20.6289C13.9209 23.1835 12.9716 25.7459 12.0918 28.3236C11.7368 29.3578 11.3972 30.3997 11.0653 31.4416C10.9341 31.8429 10.8415 32.252 10.7798 32.661C10.7335 32.9389 10.7257 33.2167 10.7566 33.5023C10.7952 33.865 10.9881 34.1969 11.2891 34.413C11.4821 34.5519 11.6982 34.66 11.9297 34.7371C12.2925 34.8683 12.6629 34.9609 13.0411 35.0227C13.4579 35.0999 13.8746 35.1616 14.2991 35.2234C14.33 35.2311 14.3531 35.2311 14.3917 35.2388C14.3994 35.2697 14.4072 35.3005 14.4149 35.3314C14.4149 35.7327 14.4149 36.1418 14.4149 36.5431C14.4149 36.5663 14.4071 36.5894 14.3994 36.6126C14.3608 36.6203 14.3223 36.628 14.2837 36.628C14.2296 36.628 14.1756 36.628 14.1216 36.628L3.35519 36.6666Z"
        fill="black"
      />
    </svg>
  );
};
export default Back;
