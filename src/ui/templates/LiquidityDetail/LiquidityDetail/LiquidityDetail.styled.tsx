// styled system
import styled from "styled-components";

export const LiquidityDetailLayout = styled.div``;
export const AddLayout = styled.div``;
export const SelectAPair = styled.div``;
export const EnterAnAmount = styled.div``;
export const SelectAPool = styled.div``;
export const AddLayoutMain = styled.div`
  height: 408px;
  background: #2c2d3a;
  border-radius: 24px;
  padding: 24px;
  position: relative;
  z-index: 1;
`;
export const AddLayoutDescription = styled.div`
  height: 154px;
  background: #353546;
  border-radius: 24px;
  margin-top: -10px;
  margin-left: 24px;
  margin-right: 24px;
  padding: 18px 24px 16px;
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
export const Textset = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Row = styled.div`
  display: flex;
`;
export const DropdownPair = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 16px;
  }
  align-items: center;
`;

export const AddButton = styled.div`
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e33319;
  border-radius: 16px;
  position: static;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
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
`;
