// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const MenuLayout_dropdown = styled.div`
  display: grid;
  width: 301px;
  grid-template-columns: 20% 80%;
  padding: 16px;
  &:hover {
    background-color: #353546;
  }
`;

export const Grid_Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Grid_titleItem = styled.div<{ itemHover: boolean }>`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: ${(props) => (!props.itemHover ? "#ffffff" : " #E33319")};

  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
export const Grid_detailItem = styled.div<{ itemHover: boolean }>`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: Poppins;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: ${(props) => (!props.itemHover ? "#8b8ca7" : " #FDFDFF")};
`;
