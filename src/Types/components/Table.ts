import { Liquidity } from "./../../ui/view/Liquidity/index";
export interface TableData {
  receiveCoinIcon: any;
  receiveCoinAmount: number;
  receiveCoinType: string;
  paidCoinAmount: number;
  painCoinType: string;
  price: number;
  status: boolean;
  time: string;
}

export interface LiquidityTableData {
  firstCoinIcon: any;
  secondCoinIcon: any;
  poolAddress: string;
  firstCoinAmount: number;
  secondCoinAmount: number;
  firstCoinType: string;
  secondCoinType: string;
}
