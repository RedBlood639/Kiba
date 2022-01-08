// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const CoinSelectorLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 174px;
  height: 56px;
  border: 1px solid #3b3c4e;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px 22px;
  @media screen and (max-width: 400px) {
    max-width: 174px;
    padding: 16px 10px;
  }
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
  @media screen and (max-width: 400px) {
    margin-left: ${(props) => (props.left ? props.left - 10 : 0)}px;
    margin-right: ${(props) => (props.right ? props.right - 10 : 0)}px;
  }
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
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
