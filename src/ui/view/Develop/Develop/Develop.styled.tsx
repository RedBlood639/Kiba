// styled system
import styled from "styled-components";

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

export const PageLayout = styled.div`
  background: #1a1b23;
  min-height: 100vh;
  padding-bottom: 20px;
  @media screen and (max-width: 1024px) {
    min-height: calc(100vh - 64px);
    padding-bottom: 84px;
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 64px;
  margin-left: 61px;
  margin-right: 61px;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    margin-left: 31px;
    margin-right: 31px;
  }
  @media screen and (max-width: 425px) {
    margin-left: 15px;
    margin-right: 15px;
  }
`;
export const ButtonItem1 = styled.div`
  width: 220px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #e33319;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;

  @media screen and (max-width: 768px) {
    width: 180px;
    height: 48px;
    font-weight: 600;
  }
  @media screen and (max-width: 425px) {
    width: 150px;
    height: 40px;
    font-size: 15px;
  }
`;

export const ButtonItem2 = styled.div`
  width: 341px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background: #e33319;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  @media screen and (max-width: 425px) {
    width: 240px;
  }
`;

export const IconLayout = styled.div`
  margin-left: 12px;
`;
export const SearchBar = styled.div`
  width: 462px;
  padding: 8px 16px;
  border: 1px solid #3b3c4e;
  box-sizing: border-box;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    width: 350px;
  }
  @media screen and (max-width: 522px) {
    width: 290px;
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
    padding-left: 24px;
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
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background: #23242f;
  border-radius: 24px;
  margin-top: 56px;
`;
export const ContentItem = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
`;
export const MobileFooter = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    width: 100%;
    position: fixed;
    height: 64px;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #1a1b23;
    box-shadow: 0px 0px 3px 0px #434a7e;
    z-index: 10;
  }
`;
export const MobileHeader = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    width: 100%;
  }
`;
export const TableLayout = styled.div`
  width: 100%;
  @media screen and (max-width: 674px) {
    overflow-x: scroll;
  }
`;
export const ContentItemGroup = styled.div`
  display: flex;
  @media screen and (max-width: 457px) {
    flex-direction: column;
  }
`;
