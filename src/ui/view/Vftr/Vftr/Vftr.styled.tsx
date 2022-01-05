// styled system
import styled from "styled-components";
import { width } from "styled-system";

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
};

export const Row = styled.div<RowProps>`
  display: flex;
  justify-content: flex-start;
  ${(props) =>
    props.space ? "justify-content:space-between; width: 100%;" : ""};
  align-items: center;
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
};
export const Col = styled.div<ColProps>`
  ${(props) => (props.width ? `min-width: ${props.width}px;` : "")};
  display: flex;
  flex-direction: column;
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  ${(props) =>
    props.between
      ? `& > *:not(:last-child) {
         margin-bottom: ${props.between}px;
      }`
      : ""};
`;

export const PageLayout = styled.div`
  background: #1a1b23;
  min-height: 100vh;
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
  flex-direction: column;
  align-items: center;
`;
type ButtonItemProps = {
  active?: boolean;
};
export const ButtonItem = styled.div<ButtonItemProps>`
  width: 228px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => (props.active ? "#E33319" : "rgba(0,0,0,0)")};
  border-radius: 12px;
  border: 1px solid #e33319;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;

  color: ${(props) => (props.active ? "white" : "#e33319")};
`;
export const MyvFTR = styled.div`
  margin-left: 37px;
  width: 220px;
  height: 108px;
  display: flex;
  padding: 24px;
  justify-content: center;
  flex-direction: column;
  background: #23242f;
  border-radius: 24px;
  align-items: center;
`;
export const Membership = styled.div`
  margin-left: 24px;
  width: 281px;
  height: 108px;
  display: flex;
  padding: 24px;
  justify-content: center;
  flex-direction: column;
  background: #23242f;
  border-radius: 24px;
  align-items: center;
`;
export const IconLayout = styled.div`
  margin-left: 12px;
`;
