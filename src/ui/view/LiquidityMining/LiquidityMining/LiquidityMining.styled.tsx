// styled system
import { responsive } from "@styled-system/css";
import styled from "styled-components";
import { fontSize } from "styled-system";

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
  color?: string;
  size?: number;
  weight?: string;
  under?: boolean;
  font?: string;
  lineHeight?: number;
};
type TextResponsive = {
  color: string;
  size: number;
  weight: string;
  under?: boolean;
  font?: string;
  lineHeight?: number;
  number: number[];
  responsive: TextProps[];
};
export const Text = styled.div<TextResponsive>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  ${(props) => (props.under ? "text-decoration-line: underline;" : "")};
  font-family: ${(props) => (props.font ? props.font : "Poppins")};
  line-height: ${(props) => (props.lineHeight ? props.lineHeight : 24)}px;
  font-feature-settings: "pnum" on, "lnum" on;
  font-style: normal;
  text-align: left;
  ${(props) =>
    props.number
      ? props.responsive
        ? props.number.map((Item, index) => {
            let resstyle = "";
            let responsive = props.responsive[index];
            resstyle += `@media screen and (max-width:${Item}px){`;
            resstyle += `${
              responsive.color ? `color: ${responsive.color}` : ""
            };`;
            resstyle += `${
              responsive.size ? `font-size: ${responsive.size}px` : ""
            };`;
            resstyle += `${
              responsive.weight ? `font-weight: ${responsive.weight}` : ""
            };`;
            resstyle += `${
              responsive.under ? "text-decoration-line: underline;" : ""
            }`;
            resstyle += `${
              responsive.font ? `font-family: ${responsive.font}` : ""
            };`;
            resstyle += `${
              responsive.lineHeight
                ? `line-height: ${responsive.lineHeight}px;`
                : ""
            };`;
            resstyle += "};";
            return resstyle;
          })
        : ""
      : ""};
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
`;

export const PageLayout = styled.div`
  background: #1a1b23;
  min-height: 100vh;
  @media screen and (max-width: 1024px) {
    max-height: calc(100vh - 64px);
  }
`;
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const MobileHeader = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    width: 100%;
  }
`;
export const SearchPoolLayout = styled.div`
  width: 100%;
  margin-top: 63px;
  margin-left: 12%;
  display: flex;
  flex-direction: column;
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 8%;
  }
  @media screen and (max-width: 600px) {
    margin-left: 5%;
  }
`;
export const PoolListLayout = styled.div`
  margin-top: 64px;
  background: #23242f;
  border-radius: 24px 24px 0px 0px;
  padding-bottom: 84px;
  padding-top: 40px;
`;

export const PoolSearch = styled.div`
  width: 344px;
  height: 56px;
  border: 1px solid #3b3c4e;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px 14px 16px 16px;
  @media screen and (max-width: 600px) {
    width: 300px;
  }
  @media screen and (max-width: 470px) {
    width: 250px;
  }
  @media screen and (max-width: 400px) {
    width: 180px;
  }
`;
export const SearchInput = styled.input`
  width: 100%;
  height: 24px;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  background: rgba(0, 0, 0, 0);
  border: none;
`;
export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 154px;
  height: 56px;

  background: #e33319;
  border-radius: 16px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;

  @media screen and (max-width: 600px) {
    width: 100px;
  }
  @media screen and (max-width: 470px) {
    width: 80px;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  background: #3b3c4e;
  border-radius: 12px;
  height: 40px;
  width: 281px;
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

  color: ${(props) => (props.active ? "#0177FB" : "white")};
`;
export const BalanceDropDown = styled.div`
  width: 221px;
  height: 40px;
  border: 1px solid #3b3c4e;
  border-radius: 16px;
  padding: 8px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const PoolList = styled.div`
  margin-top: 48px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 400px));
  grid-gap: 30px;
  justify-content: center;
  @media screen and (max-width: 450px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  }
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
export const PoolListContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 10%;
  padding-right: 10%;
  @media screen and (max-width: 1024px) {
    padding-left: 5%;
    padding-right: 5%;
  }
  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    & > *:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
export const SwitchGroup = styled.div`
  display: flex;
  @media screen and (max-width: 500px) {
    flex-direction: column;
    align-items: center;
    & > *:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
export const SwitchContainer = styled.div`
  margin: 0px 40px 0px 16px;
  @media screen and (max-width: 500px) {
    margin: 0px;
  }
`;
