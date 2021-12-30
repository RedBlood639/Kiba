// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const PoolSelectorLayout = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  border: 1px solid #3b3c4e;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 16px 22px;
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
