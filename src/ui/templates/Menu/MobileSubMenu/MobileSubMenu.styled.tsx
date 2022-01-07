// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const SubMenuLayout = styled.div<{ displayMenu: boolean }>`
  display: ${(props) => (props.displayMenu ? "block" : "none")};
  position: absolute;
  bottom: 64px;
  right: 0px;
  background: #23242f;
  border-radius: 16px;
  color: white;
  z-index: 1;
`;
