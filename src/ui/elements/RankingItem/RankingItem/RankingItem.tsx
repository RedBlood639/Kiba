import React from "react";
import { Layout, Ranking, Text, Row } from "./RankingItem.styled";

import { RankingItemData } from "Types/components/RankingItem";
import { Medal } from "assets/icon";

const WalletItem: React.FC<{
  item: RankingItemData;
  index: number;
}> = ({ item, index }) => {
  return (
    <Layout>
      <Row>
        <Ranking>
          {index == 0 ? (
            <Medal.Medal1 />
          ) : index == 1 ? (
            <Medal.Medal2 />
          ) : index == 2 ? (
            <Medal.Medal3 />
          ) : (
            <Text color="white" size={14} weight="normal">
              {index + 1}
            </Text>
          )}
        </Ranking>
        <Text color="white" size={14} weight="normal">
          {item.wallet}
        </Text>
      </Row>
      {index == 0 ? (
        <Text
          color="#FFCB1F"
          size={14}
          weight="normal"
          radius={24}
          background="#FFFAEB"
          padding="0px 8px"
        >
          {item.amount}
        </Text>
      ) : index == 1 ? (
        <Text
          color="#737596"
          size={14}
          weight="normal"
          radius={24}
          background="#FFFAEB"
          padding="0px 8px"
        >
          {item.amount}
        </Text>
      ) : index == 2 ? (
        <Text
          color="#BB6BDA"
          size={14}
          weight="normal"
          radius={24}
          background="#FFFAEB"
          padding="0px 8px"
        >
          {item.amount}
        </Text>
      ) : (
        <Text color="white" size={14} weight="normal">
          {item.amount}
        </Text>
      )}
    </Layout>
  );
};
export default WalletItem;
