// styled system
import { type } from "os";
import styled from "styled-components";

// -------------------------------------------------------
export const AddLiquidityLayout = styled.div`
  min-height: 568px;
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
  & > *:not(:last-child) {
    margin-right: 8px;
  }
  ${(props) => (props.right ? "justify-content:flex-end; width: 100%;" : "")};
  ${(props) => (props.center ? "justify-content:center;  width: 100%;" : "")};
`;
export const Col = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleLayout = styled.div`
  width: 100%;
  display: flex;
  & > *:not(:last-child) {
    margin-right: 8px;
  }
  align-items: center;
  justify-content: space-between;
`;
export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  background: #3b3c4e;
  border-radius: 16px;
  height: 48px;
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

  color: ${(props) => (props.active ? "#e33319" : "white")};
`;
export const EnterButton = styled.div`
  width: 100%;
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
export const PoolDetail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  width: 100%;
  height: 160px;
  border: 1px solid #3b3c4e;
  border-radius: 16px;
`;
