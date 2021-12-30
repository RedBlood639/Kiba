// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const CoinSelectorBarLayout = styled.div`
  min-height: 552px;
  background: #2c2d3a;
  border-radius: 24px;
  padding: 24px 24px 0px 24px;
`;

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
};
export const Text = styled.div<TextProps>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  ${(props) => (props.under ? "text-decoration-line: underline;" : "")};
  font-family: Poppins;
  font-style: normal;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  text-align: left;
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;
export const TitleLayout = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 8px;
  }
  align-items: center;
  justify-content: flex-start;
`;
export const SearchBar = styled.div`
  width: 100%;
  border: 1px solid #3b3c4e;
  box-sizing: border-box;
  border-radius: 16px;
  display: flex;
  & > *:not(:last-child) {
    margin-right: 8px;
  }
  align-items: center;
  justify-content: flex-start;
  padding: 21px;
`;
export const SearchInput = styled.input`
  width: 100%;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  background-color: rgba(0, 0, 0, 0);
  border: none;
`;

export const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.div`
  width: 100%;
  padding: 16px;
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
