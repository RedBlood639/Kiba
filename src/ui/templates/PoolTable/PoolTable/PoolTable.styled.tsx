// styled system
import styled from "styled-components";

// -------------------------------------------------------

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

export const TableLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionList = styled.div`
  width: 402px;
  border-bottom: 1px solid #2c2d3a;
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 24px;
  }
  @media screen and (max-width: 570px) {
    width: 100%;
  }
`;

type OptionItemProps = {
  active?: boolean;
};
export const OptionItem = styled.div<OptionItemProps>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: ${(props) => (props.active ? "#0177fb" : "white")};
  display: flex;
  align-items: center;
  padding: 4px 0px;
  ${(props) => (props.active ? "border-bottom:3px solid #0177fb;" : "")};
`;
export const SearchBar = styled.div`
  width: 362px;
  padding: 8px 16px;
  border: 1px solid #3b3c4e;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 570px) {
    width: 100%;
  }
`;
export const SearchInput = styled.input`
  background: rgba(0, 0, 0, 0);
  border: none;
  width: 100%;
`;
export const Table = styled.table`
  background: rgba(0, 0, 0, 0);
  border: none;
  border-collapse: separate;
  border-spacing: 0px 16px;
  td,
  th {
    border: none;
    padding: 0px 24px;
  }
  td {
    text-align: left;
  }

  th {
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
  }

  thead > tr {
    background: #23242f;
    border-radius: 50px;
    height: 64px;
    & > :first-child {
      border-radius: 16px 0 0 16px;
    }
    & > :last-child {
      border-radius: 0 16px 16px 0;
    }
  }
  tBody > tr {
    height: 56px;
  }
`;
export const Layout = styled.div`
  width: 100%;
  @media screen and (max-width: 1276px) {
    overflow-x: scroll;
  }
  @media screen and (max-width: 1024px) {
    overflow-x: hidden;
  }
  @media screen and (max-width: 815px) {
    overflow-x: scroll;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media screen and (max-width: 570px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
