// styled system
import styled from "styled-components";

type TextProps = {
  color?: string;
  size?: number;
  weight?: string;
  under?: boolean;
  font?: string;
  lineHeight?: number;
  background?: string;
  radius?: number;
  padding?: string;
  width?: number;
  center?: Boolean;
};
type TextResponsive = {
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
  number: number[];
  responsive: TextProps[];
  center?: Boolean;
};
export const Text = styled.div<TextResponsive>`
  ${(props) => (props.width ? `max-width: ${props.width}px;` : "")};
  ${(props) => (props.center ? "text-align: center;" : "")};
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
  ${(props) =>
    props.number
      ? props.responsive
        ? props.number.map((Item, index) => {
            let resstyle = "";
            let responsive = props.responsive[index];
            resstyle += `@media screen and (max-width:${Item}px){`;
            resstyle += `${
              responsive.width ? `max-width: ${responsive.width}` : ""
            };`;
            resstyle += `${responsive.center ? "text-align: center;" : ""}`;
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
  center?: boolean;
};

type ColResponsiveProps = {
  width?: number;
  padding?: string;
  between?: number;
  center?: boolean;
  responsive: ColProps[];
  number: number[];
};

export const Col = styled.div<ColResponsiveProps>`
  ${(props) => (props.width ? `width: ${props.width}px;` : "")};
  ${(props) => (props.center ? "align-items: center;" : "")};
  display: flex;

  flex-direction: column;
  padding: ${(props) => (props.padding ? props.padding : "0px")};
  ${(props) =>
    props.between
      ? `& > *:not(:last-child) {
        margin-bottom: ${props.between}px;
      }`
      : ""};
  ${(props) =>
    props.number
      ? props.responsive
        ? props.number.map((Item, index) => {
            let resstyle = "";
            let responsive = props.responsive[index];
            resstyle += `@media screen and (max-width:${Item}px){`;
            resstyle += `${
              responsive.width ? `width: ${responsive.width}px` : ""
            };`;
            resstyle += "};";
            return resstyle;
          })
        : ""
      : ""};
`;

export const PageLayout = styled.div`
  background: #1a1b23;
  min-height: 100vh;
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
export const MobileHeader = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
    width: 100%;
  }
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
  @media screen and (max-width: 768px) {
    width: 170px;
  }
  @media screen and (max-width: 425px) {
    width: 130px;
  }
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
  @media screen and (max-width: 900px) {
    width: 160px;
  }
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
  @media screen and (max-width: 480px) {
    width: 100%;
  }
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
  @media screen and (max-width: 900px) {
    width: 231px;
  }
  @media screen and (max-width: 480px) {
    margin: 0px;
    width: 100%;
  }
`;
export const IconLayout = styled.div`
  margin-left: 12px;
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
export const ContentLayout = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
export const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;
export const Content = styled.div`
  display: flex;
  @media screen and (max-width: 480px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
export const Detail = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 24px;
  }
  @media screen and (max-width: 900px) {
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 15px;
      margin-right: 0px;
    }
  }
`;
