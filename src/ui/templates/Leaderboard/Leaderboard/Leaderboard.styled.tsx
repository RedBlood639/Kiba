// styled system
import styled from "styled-components";

// -------------------------------------------------------
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
  align-items: center;
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Total = styled.div`
  display: flex;
  margin-top: 24px;
  @media screen and (max-width: 455px) {
    flex-direction: column;
    align-items: center;
    & > *:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
export const UserTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background: #23242f;
  border-radius: 24px;
  margin-right: 24px;
  @media screen and (max-width: 455px) {
    margin-right: 0px;
    width: 100%;
  }
`;
export const AmountTotal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  background: #23242f;
  border-radius: 24px;
  @media screen and (max-width: 455px) {
    width: 100%;
  }
`;
export const RankingList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: column;
  grid-template-rows: repeat(5, 1fr);
  column-gap: 40px;
  margin-top: 64px;
  @media screen and (max-width: 650px) {
    display: flex;
    flex-direction: column;
    & > *:not(:last-child) {
      margin-bottom: 15px;
    }
  }
`;
