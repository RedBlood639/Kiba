// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const CardChangeLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 601px;
  background: #2c2d3a;
  border-radius: 24px;
  padding: 24px;
`;
export const ButtonLayout = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Textset = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const Text = styled.div<{ color: string }>`
  color: ${(props) => props.color};
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
`;
export const IconLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 28px;
  margin-bottom: 4px;
`;
export const RefreshDiv = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 11px;
  }
  margin-bottom: 24px;
`;
export const Confirmdiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ConfirmButton = styled.div<{ active: boolean }>`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: center;
  border-radius: 16px;
  align-items: center;
  background: ${(props) => (props.active ? "#3b3c4e" : "#E33319")};
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: ${(props) => (props.active ? "#4f5069" : "white")};
`;
export const SplitLine = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  width: 100%;
  border: 1px solid #3b3c4e;
  height: 1px;
`;
export const TextDetail = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;
export const MainLayout = styled.div``;
export const SettingLayout = styled.div``;
export const TitleLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 24px;
`;
export const BackIconLayout = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`;
export const TitleText = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
`;
export const SelectItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  background: #3b3c4e;
  border-radius: 16px;

  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  & :hover {
    background: #e33319;
  }
`;
export const SelectLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
export const SelectItemList = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;
export const SelectTitle = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  margin-bottom: 8px;
`;
export const DeadlineLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`;
export const DeadlineTitle = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  margin-bottom: 8px;
`;
export const DataInput = styled.input`
  padding: 8px 16px;
  width: 80px;
  height: 40px;
  border: 1px solid #3b3c4e;
  box-sizing: border-box;
  border-radius: 16px;
  background-color: rgba(0, 0, 0, 0);
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export const Unit = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
`;
export const DeadlineItemLayout = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 8px;
  }
`;
export const ExportLayout = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
  align-items: center;
`;
export const ExportText = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
`;
export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const OrderLayout = styled.div``;
export const IconTextPair = styled.div`
  display: flex;
  & > *:not(:last-child) {
    margin-right: 14px;
  }
`;
export const AmountText = styled.div`
  font-family: Rubik;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 36px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
`;
export const TextLayout = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;
`;
export const TextDetailLayout = styled.div`
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const ButLayout = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  height: 56px;

  background: #e33319;
  border-radius: 16px;
  margin-top: 24px;
`;
export const ModalCloseLayout = styled.div`
  position: absolute;
  right: 31px;
  top: 31px;
`;
export const ModalLayout = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  height: 392px;
  & > *:not(:last-child) {
    margin-bottom: 8px;
  }
`;
export const EtherscanButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #3b3c4e;
  border-radius: 16px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  width: 342px;
  height: 52px;
  margin-top: 16px;
`;
