import dynamic from "next/dynamic";
//export

export const Home = dynamic(() => import("./Home/Home"));
