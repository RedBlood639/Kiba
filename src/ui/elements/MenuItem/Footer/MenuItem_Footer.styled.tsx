// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const MenuItemLayout = styled.div`
  position: relative;
`;
export const ItemLayout = styled.div<{ hover: boolean; active: boolean }>`
  ${(props) =>
    props.active
      ? "color: red"
      : !props.hover
      ? "color: #ffffff"
      : "color: red"};
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
  @media screen and (max-width: 450px) {
    padding: 20px 0px;
  }
`;
