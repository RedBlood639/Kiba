import React from "react";
import { WalletItemLayout, IconLayout, TitleLayout } from "./ChainItem.styled";
import Image from "next/image";
import { ChainData } from "Types/components/Chain";

const WalletItem: React.FC<{
  itemData: ChainData;
  getData: Function;
}> = ({ itemData, getData }) => {
  const clickItem = () => {
    getData(itemData.title);
  };

  return (
    <WalletItemLayout onClick={clickItem}>
      <IconLayout>
        <Image src={itemData.subIcon.src} height={40} width={40}></Image>
      </IconLayout>
      <TitleLayout>{itemData.subTitle}</TitleLayout>
    </WalletItemLayout>
  );
};
export default WalletItem;
