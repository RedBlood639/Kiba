// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const CoinChangeLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const IconGroup = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
export const FromIcon = styled.div``;
export const ToIcon = styled.div`
  margin-right: -15px;
`;

export const FromText = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  margin-left: 8px;
`;
export const ToText = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #8b8ca7;
  margin-right: 8px;
`;
