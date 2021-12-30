// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const PoolItemLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 32px;
  min-height: 428px;
  background: #2c2d3a;
  box-shadow: 12px 24px 80px rgba(30, 30, 42, 0.08);
  border-radius: 24px;
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
  align-items: center;
`;
type IconLayoutProps = {
  zIndex: number;
};
export const IconLayout = styled.div<IconLayoutProps>`
  position: relative;
  z-index: ${(props) => props.zIndex};
`;

type ButtonItemProps = {
  width?: boolean;
  claim?: boolean;
};
export const ButtonItem = styled.div<ButtonItemProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? "100%" : "calc( (100% - 8px) / 2)")};
  height: 48px;
  border: 1px solid #e33319;
  background: ${(props) => (props.claim ? "rgba(0,0,0,0)" : "#e33319")};
  border-radius: 12px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: ${(props) => (props.claim ? "#e33319" : "#ffffff")};
`;
