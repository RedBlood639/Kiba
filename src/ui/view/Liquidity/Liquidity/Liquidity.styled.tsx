// styled system
import styled from "styled-components";

export const LiquidityLayout = styled.div`
  display: flex;
`;

export const LiquidityContainer = styled.div`
  display: flex;
  width: 65%;
  background: #1a1b23;
  min-height: 100vh;
  flex-direction: column;
`;

export const LiquidityHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;

export const DetailContainer = styled.div`
  display: flex;
  width: 35%;
  background: #23242f;
  min-height: 100vh;
  flex-direction: column;
`;
export const DetailHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const DetailLayout = styled.div`
  margin: 76px 37px 0px 37px;
`;
export const LiquidityTableLayout = styled.div`
  margin-top: 62px;
  margin-left: 61px;
  margin-right: 24px;
`;
export const ModalLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ModalTitle = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`;
export const ModalText = styled.div`
  padding: 16px;

  background: #2c2d3a;
  border-radius: 16px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;

  font-feature-settings: "pnum" on, "lnum" on;

  color: #ffffff;
  height: 293px;
  margin-bottom: 88px;
`;
export const ModalButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background: #e33319;
  border-radius: 16px;
  padding: 16px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;

  text-align: center;
  font-feature-settings: "pnum" on, "lnum" on;

  color: #ffffff;
`;
