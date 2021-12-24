// styled system
import styled from "styled-components";
import { SubMenuLayout } from "ui/templates/Menu/SubMenu/SubMenu.styled";

// -------------------------------------------------------
export const MenuItemLayout = styled.div`
  position: relative;
`;
export const ItemLayout = styled.div<{ hover: boolean }>`
  ${(props) => (!props.hover ? "color: #ffffff" : "color: red")};
  path {
    ${(props) => (props.hover ? "stroke: red" : "")};
  }
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  padding: 20px 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  display: flex;
`;
export const IconLayout = styled.div`
  margin-left: 8px;
  width: 24px;
  height: 24px;
`;
