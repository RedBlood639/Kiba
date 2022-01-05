import dynamic from "next/dynamic";
//export

export const Leaderboard = dynamic(() => import("./Leaderboard/Leaderboard"));
