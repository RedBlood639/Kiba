import React from "react";
import { WalletItemLayout, IconLayout, TitleLayout } from "./WalletItem.styled";
import { WalletItemData } from "Types/components/Wallet";
import { getEnvironmentData } from "worker_threads";

const WalletItem: React.FC<{
  itemData: WalletItemData;
  keys: number;
  getData: Function;
}> = ({ itemData, keys, getData }) => {
  const clickItem = () => {
    getData(keys + 1);
  };

  return (
    <WalletItemLayout onClick={clickItem}>
      <IconLayout>
        <itemData.subIcon />
      </IconLayout>
      <TitleLayout>{itemData.subTitle}</TitleLayout>
    </WalletItemLayout>
  );
};
export default WalletItem;
