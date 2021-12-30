import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Claim: React.FC<IconProps> = ({
  iColor = "white",
  iSize = { x: 16, y: 16 },
}) => {
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
        d="M13.3333 5.3335H2.66667C2.29867 5.3335 2 5.63216 2 6.00016V7.3335C2 7.7015 2.29867 8.00016 2.66667 8.00016H13.3333C13.7013 8.00016 14 7.7015 14 7.3335V6.00016C14 5.63216 13.7013 5.3335 13.3333 5.3335Z"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.99999 14.0002V5.3335"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.464 4.4082C9.74534 5.1562 8.61401 5.33354 8.06601 5.33354"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.066 5.33357C8.066 5.33357 7.73667 3.25624 8.54667 2.41357"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.464 4.40816C10.9933 3.85749 10.9933 2.96415 10.464 2.41349C9.93467 1.86282 9.07667 1.86282 8.54733 2.41349"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.53601 4.4082C6.25468 5.1562 7.38601 5.33354 7.93401 5.33354"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.93401 5.33357C7.93401 5.33357 8.26334 3.25624 7.45334 2.41357"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.53601 4.40816C5.00667 3.85749 5.00667 2.96415 5.53601 2.41349C6.06534 1.86282 6.92334 1.86282 7.45267 2.41349"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.6667 8V13.3333C12.6667 13.7013 12.368 14 12 14H4.00001C3.63201 14 3.33334 13.7013 3.33334 13.3333V8"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Claim;
