import dynamic from "next/dynamic";
//export

export const PoolTable = dynamic(() => import("./PoolTable/PoolTable"));
