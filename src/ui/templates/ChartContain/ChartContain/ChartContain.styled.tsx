// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const ChartLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 96px;
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
export const PriceText = styled.div`
  margin-top: 26px;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 56px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  margin-top: 24px;
`;
export const TotalText = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #53f3c3;
  margin-right: 8px;
`;
export const TimeLayout = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
`;
export const StateText = styled.div`
  margin-top: 8px;
  display: flex;
`;
export const TimeRangesLayout = styled.div`
  display: flex;
  color: white;
  @media screen and (max-width: 500px) {
    margin-top: 20px;
  }
`;
export const TimeRange = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 59px;
  height: 32px;
  background: #1a1b23;
  border-radius: 12px;
  &:hover {
    background: #3b3c4e;
  }
`;
