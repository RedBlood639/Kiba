import dynamic from "next/dynamic";
//export

export const OrderTable = dynamic(() => import("./OrderTable/OrderTable"));
