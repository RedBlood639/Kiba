// styled system
import { BlobOptions } from "buffer";
import styled from "styled-components";

// -------------------------------------------------------
export const CardSelectorLayout = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 56px;
  border: 1px solid #3b3c4e;
  box-sizing: border-box;
  border-radius: 16px;
`;
export const Dropdowndiv = styled.div`
  margin-left: 18px;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Text = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  margin-left: 8px;
`;

export const TextNumber = styled.input<{ valid: number }>`
  color: ${(props) => (props.valid * 1 == 0 ? "#8b8ca7" : "white")};
  width: 60%;
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 28px;
  font-feature-settings: "pnum" on, "lnum" on;
  text-align: right;
  background: rgba(0, 0, 0, 0);
  padding-right: 14px;
  border: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const IconPair = styled.div`
  display: flex;
  align-items: center;
`;
