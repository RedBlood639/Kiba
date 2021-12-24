// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const SubMenuLayout = styled.div<{ displayMenu: boolean }>`
  display: ${(props) => (props.displayMenu ? "block" : "none")};
  position: absolute;
  top: 56px;
  background: #23242f;
  border-radius: 16px;
  color: white;
`;
