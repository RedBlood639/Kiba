import dynamic from "next/dynamic";
//export

export const PoolItem = dynamic(() => import("./PoolItem/PoolItem"));
