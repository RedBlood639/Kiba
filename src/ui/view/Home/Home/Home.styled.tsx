// styled system
import styled from "styled-components";

export const Layout = styled.div`
  display: flex;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const ChartContainer = styled.div`
  display: flex;
  width: 60%;
  background: #1a1b23;
  min-height: 100vh;
  flex-direction: column;
  @media screen and (max-width: 1128.5px) {
    width: calc(100vw - 451px);
  }
`;
export const DetailContainer = styled.div`
  display: flex;
  width: 40%;
  background: #23242f;
  min-height: 100vh;
  flex-direction: column;
  @media screen and (max-width: 1128.5px) {
    min-width: 451px;
  }
`;

export const ChartHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
export const ChartLayout = styled.div`
  margin-top: 65px;
  margin-left: 61px;
  margin-right: 21px;
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const DetailLayout = styled.div`
  margin: 76px 37px 0px 37px;
`;
export const MobileLayout = styled.div`
  display: none;
  @media screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    background: #1a1b23;
    min-height: calc(100vh - 64px);
    align-items: center;
    padding-bottom: 84px;
  }
`;
export const MobileChartContainer = styled.div`
  margin-top: 30px;
  width: 85%;
`;
export const MobileDetailContainer = styled.div`
  margin-top: 20px;
  max-width: 451px;
  @media screen and (max-width: 451px) {
    width: 95%;
  }
`;
export const MobileHeader = styled.div`
  width: 100%;
`;
export const MobileFooter = styled.div`
  position: fixed;
  min-width: 100%;
  height: 64px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a1b23;
  box-shadow: 0px 0px 3px 0px #434a7e;
`;
