// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  height: 635px;
  background: #2c2d3a;
  border-radius: 24px;
  padding: 24px;
`;
type TextProps = {
  color: string;
  size: number;
  weight: string;
  under?: boolean;
  font?: string;
  lineHeight?: number;
  background?: string;
  radius?: number;
  padding?: string;
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
  ${(props) =>
    props.background ? `background-color: ${props.background};` : ""};
  border-radius: ${(props) => (props.radius ? props.radius : 0)}px;
  padding: ${(props) => (props.padding ? props.padding : "0px")};
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
export const PrizeBox = styled.div`
  height: 240px;
  height: 240px;
  background: #23242f;
  box-shadow: 12px 20px 24px rgba(30, 30, 42, 0.08);
  border-radius: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 22px;
  margin-bottom: 30px;
`;
export const SplitLine = styled.div`
  width: 100%;
  border: 1px solid #3b3c4e;
  height: 1px;
`;
