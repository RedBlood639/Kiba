import dynamic from "next/dynamic";
//export

export const Layout = dynamic(() => import("./App_Layout/Layout"));
