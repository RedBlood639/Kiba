import React from "react";
//type
import { IconProps } from "Types/components/Icon";
//--------------------------
const UserIcon: React.FC<IconProps> = ({
  iColor = "white",
  iSize = { x: 32, y: 32 },
}) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.6067 5.3933C27.9996 6.78619 29.1045 8.43979 29.8583 10.2597C30.6121 12.0796 31.0001 14.0301 31.0001 16C31.0001 17.9698 30.6121 19.9204 29.8583 21.7403C29.1045 23.5602 27.9996 25.2137 26.6067 26.6066C25.2138 27.9995 23.5602 29.1044 21.7403 29.8582C19.9204 30.6121 17.9699 31.0001 16 31.0001C14.0302 31.0001 12.0796 30.6121 10.2597 29.8582C8.43985 29.1044 6.78625 27.9995 5.39336 26.6066C2.5803 23.7936 0.999939 19.9782 0.999939 16C0.999939 12.0217 2.5803 8.20637 5.39336 5.3933C8.20643 2.58024 12.0218 0.999878 16 0.999878C19.9783 0.999878 23.7936 2.58024 26.6067 5.3933"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.8439 28.095C24.2039 25.0283 20.5073 22.6666 15.9989 22.6666C11.4906 22.6666 7.79393 25.0283 7.15393 28.095"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5346 9.13166C20.0201 9.5909 20.4087 10.1428 20.6772 10.7548C20.9458 11.3668 21.089 12.0264 21.0983 12.6946C21.1076 13.3629 20.9828 14.0262 20.7313 14.6454C20.4799 15.2646 20.1069 15.8271 19.6343 16.2997C19.1617 16.7722 18.5992 17.1453 17.98 17.3967C17.3608 17.6482 16.6975 17.773 16.0292 17.7637C15.361 17.7544 14.7014 17.6112 14.0894 17.3426C13.4774 17.0741 12.9255 16.6855 12.4663 16.2C11.5831 15.2522 11.1023 13.9985 11.1251 12.7032C11.148 11.4078 11.6727 10.1719 12.5888 9.25585C13.5049 8.33976 14.7408 7.81502 16.0361 7.79216C17.3315 7.76931 18.5851 8.25013 19.5329 9.13333"
        stroke={iColor}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
const UserIcon_active: React.FC<IconProps> = ({ iSize = { x: 40, y: 40 } }) => {
  return (
    <svg
      width={iSize?.x}
      height={iSize?.y}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="20" cy="20" r="20" fill="#3B3C4E" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 10L20 17L27 10"
        fill="#3B3C4E"
      />
      <path
        d="M13 10L20 17L27 10"
        stroke="#53F3C3"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27 29.5791L20 22.5791L13 29.5791"
        fill="#3B3C4E"
      />
      <path
        d="M27 29.5791L20 22.5791L13 29.5791"
        stroke="#FF6370"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default { User: UserIcon, User_active: UserIcon_active };
