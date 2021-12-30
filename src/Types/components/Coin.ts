export interface CoinSelectorData {
  icon: any;
  text: string;
  selectFunction: Function;
}
export interface CoinSelectorBarData {
  selectFunction: Function;
  getData: Function;
}
export interface Coin {
  icon: any;
  text: String;
}
export interface CoinItem {
  icon: any;
  text: string;
  amount: number;
}
