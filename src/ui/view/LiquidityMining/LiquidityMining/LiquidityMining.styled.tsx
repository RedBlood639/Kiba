// styled system
import styled from "styled-components";

type MarginDiv = {
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export const MarginDiv = styled.div<MarginDiv>`
  margin-top: ${(props) => (props.top ? props.top : 0)}px;
  margin-bottom: ${(props) => (props.bottom ? props.bottom : 0)}px;
  margin-left: ${(props) => (props.left ? props.left : 0)}px;
  margin-right: ${(props) => (props.right ? props.right : 0)}px;
  display: flex;
  align-items: center;
`;
type TextProps = {
  color: string;
  size: number;
  weight: string;
  under?: boolean;
  font?: string;
  lineHeight?: number;
};
export const Text = styled.div<TextProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  ${(props) => (props.under ? "text-decoration-line: underline;" : "")};
  font-family: ${(props) => (props.font ? props.font : "Poppins")};
  font-style: normal;
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 24)}px;
  font-feature-settings: "pnum" on, "lnum" on;
  text-align: left;
`;
type RowProps = {
  space?: boolean;
  right?: boolean;
  center?: boolean;
};
export const Row = styled.div<RowProps>`
  display: flex;
  ${(props) =>
    props.space ? "justify-content:space-between; width: 100%;" : ""};
  align-items: center;
  ${(props) => (props.right ? "justify-content:flex-end; width: 100%;" : "")};
  ${(props) => (props.center ? "justify-content:center;  width: 100%;" : "")};
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageLayout = styled.div`
  background: #1a1b23;
  min-height: 100vh;
`;
export const Header = styled.div`
  display: flex;

  justify-content: space-between;
`;
export const Container = styled.div``;
export const SearchPoolLayout = styled.div`
  margin-top: 63px;
  margin-left: 183px;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const PoolListLayout = styled.div`
  width: 100%;
  margin-top: 64px;
  padding: 40px 184px 0px 182px;
  background: #23242f;
  box-shadow: 0px -24px 16px rgba(30, 30, 42, 0.08);
  border-radius: 24px 24px 0px 0px;
  min-height: 1072px;
`;

export const PoolSearch = styled.div`
  width: 344px;
  height: 56px;
  border: 1px solid #3b3c4e;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px 14px 16px 16px;
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 24px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  background: rgba(0, 0, 0, 0);
  border: none;
`;
export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 154px;
  height: 56px;

  background: #e33319;
  border-radius: 16px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
`;
export const ButtonBox = styled.div`
  display: flex;
  background: #3b3c4e;
  border-radius: 12px;
  height: 40px;
  width: 281px;
`;
type ButtonItemProps = {
  active: boolean;
};
export const ButtonItem = styled.div<ButtonItemProps>`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.active ? "white" : "rgba(0,0,0,0)")};
  border-radius: 16px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;

  color: ${(props) => (props.active ? "#0177FB" : "white")};
`;
export const BalanceDropDown = styled.div`
  width: 221px;
  height: 40px;
  border: 1px solid #3b3c4e;
  border-radius: 16px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PoolList = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 5%;
`;
