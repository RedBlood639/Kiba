// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const WalletConnectMenuLayout = styled.div`
  display: flex;
  width: 350px;
  height: 40px;
  margin: 12px 60px 12px 0px;
  justify-content: space-between;
  @media screen and (max-width: 500px) {
    width: fit-content;
    margin: 0px 0px 0px 10px;
  }
`;
export const IconLayout = styled.div`
  margin: 5px;
  @media screen and (max-width: 450px) {
    display: none;
  }
`;
