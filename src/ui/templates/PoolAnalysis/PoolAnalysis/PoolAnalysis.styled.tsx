// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 28px 24px 32px;
  min-height: 664.5px;
  background: #2c2d3a;
  border-radius: 24px;
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
  width?: number;
};
export const Text = styled.div<TextProps>`
  ${(props) => (props.width ? `max-width: ${props.width}px;` : "")};
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
  between?: number;
  top?: boolean;
};

export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: flex-start;
  ${(props) =>
    props.space ? "justify-content:space-between; width: 100%;" : ""};
  align-items: ${(props) => (props.top ? "flex-start" : "center")};
  ${(props) => (props.right ? "justify-content:flex-end; width: 100%;" : "")};
  ${(props) => (props.center ? "justify-content:center;  width: 100%;" : "")};
  ${(props) =>
    props.between
      ? `& > *:not(:last-child) {
         margin-right: ${props.between}px;
      }`
      : ""};
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
type ColProps = {
  width?: number;
  padding?: string;
  between?: number;
  center?: boolean;
};
export const Col = styled.div<ColProps>`
  ${(props) => (props.width ? `min-width: ${props.width}px;` : "")};
  display: flex;
  flex-direction: column;

  ${(props) => (props.center ? "align-items:center;  width: 100%;" : "")};
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  ${(props) =>
    props.between
      ? `& > *:not(:last-child) {
         margin-bottom: ${props.between}px;
      }`
      : ""};
`;
export const ProjectDiv = styled.div`
  width: 100%;
  height: 201.5px;
  background: #1a1b23;
  border-radius: 16px;
  margin-bottom: 29px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const ButtonItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 56px;
  background: #e33319;
  border-radius: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
`;
