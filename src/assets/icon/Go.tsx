import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const Go: React.FC<IconProps> = ({ iSize = { x: 24, y: 24 } }) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.9219 6.16924C13.7711 6.29974 12.7086 6.84911 11.9368 7.71264C11.1651 8.57618 10.7381 9.6935 10.7372 10.8516V11.1498C11.2488 10.5333 11.8876 10.0347 12.6099 9.68821C13.3322 9.34167 14.1209 9.15537 14.9219 9.14206V10.7152C14.9219 10.8271 14.9534 10.9367 15.0129 11.0316C15.0723 11.1264 15.1572 11.2026 15.2578 11.2514C15.3585 11.3003 15.4709 11.3198 15.5822 11.3078C15.6934 11.2958 15.7991 11.2527 15.887 11.1834L19.782 8.10704C19.8503 8.0533 19.9055 7.98474 19.9435 7.90655C19.9814 7.82836 20.0012 7.74257 20.0012 7.65565C20.0012 7.56872 19.9814 7.48293 19.9435 7.40474C19.9055 7.32655 19.8503 7.258 19.782 7.20425L15.887 4.12869C15.7992 4.05916 15.6936 4.0158 15.5823 4.00356C15.471 3.99133 15.3585 4.01073 15.2578 4.05953C15.157 4.10834 15.072 4.18457 15.0126 4.27948C14.9532 4.37438 14.9217 4.48412 14.9219 4.59609V6.16924Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.1588 12.4205V15.7891C19.1588 16.9059 18.7152 17.9769 17.9255 18.7666C17.1359 19.5563 16.0648 19.9999 14.9481 19.9999H8.21079C7.09402 19.9999 6.02299 19.5563 5.23331 18.7666C4.44364 17.9769 4 16.9059 4 15.7891V9.05185C4 7.93508 4.44364 6.86405 5.23331 6.07438C6.02299 5.2847 7.09402 4.84106 8.21079 4.84106H10.7373"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default Go;