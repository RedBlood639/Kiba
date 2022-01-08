import dynamic from "next/dynamic";
//export

export const ChainItem = dynamic(() => import("./ChainItem/ChainItem"));
