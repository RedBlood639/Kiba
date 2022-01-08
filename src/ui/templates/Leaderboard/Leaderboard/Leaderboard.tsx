import React, { useEffect, useState } from "react";

import {
  Layout,
  Total,
  UserTotal,
  AmountTotal,
  RankingList,
  Text,
} from "./Leaderboard.styled";

import { RankingItemData } from "Types/components/RankingItem";
import { RankingItem } from "ui/elements/RankingItem";

const DataList: RankingItemData[] = [
  { wallet: "0x37d0...6ddb", amount: "18,047.44" },
  { wallet: "0xb13e...7c56", amount: "16,986.80" },
  { wallet: "0x722d...534d", amount: "16,279.35" },
  { wallet: "0x03d4...7f4b", amount: "10,261.72" },
  { wallet: "0xc058...44ba", amount: "7,700.46" },
  { wallet: "0x722d...534d", amount: "7,495.81" },
  { wallet: "0xc058...44ba", amount: "7,422.46" },
  { wallet: "0x03d4...7f4b", amount: "7,155.31" },
  { wallet: "0x37d0...6ddb", amount: "6,899.62" },
  { wallet: "0xb13e...7c56", amount: "6,841.92" },
];

const Leaderboard: React.FC = () => {
  return (
    <Layout>
      <Text
        size={18}
        weight="600"
        lineHeight={28}
        color="white"
        number={[]}
        responsive={[]}
      >
        Leaderboard
      </Text>
      <Total>
        <UserTotal>
          <Text
            font="Rubik"
            weight="bold"
            lineHeight={36}
            size={24}
            color="#0177FB"
            number={[500]}
            responsive={[{size:20}]}
          >
            1506
          </Text>
          <Text
            weight="600"
            color="white"
            size={14}
            number={[500]}
            responsive={[{size:12}]}
          >
            Number of Users
          </Text>
        </UserTotal>
        <AmountTotal>
          <Text
            font="Rubik"
            weight="bold"
            lineHeight={36}
            size={24}
            color="#0177FB"
            number={[]}
            responsive={[]}
          >
            249,412.544733
          </Text>
          <Text
            weight="600"
            color="white"
            size={14}
            number={[]}
            responsive={[]}
          >
            Total Amount (DEX)
          </Text>
        </AmountTotal>
      </Total>
      <RankingList>
        {DataList.map((Item, index) => (
          <RankingItem
            key={`MenuItem_${index}`}
            index={index}
            item={Item}
          ></RankingItem>
        ))}
      </RankingList>
    </Layout>
  );
};
export default Leaderboard;
