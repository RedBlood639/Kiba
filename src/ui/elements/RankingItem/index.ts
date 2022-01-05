import dynamic from "next/dynamic";
//export

export const RankingItem = dynamic(() => import("./RankingItem/RankingItem"));
