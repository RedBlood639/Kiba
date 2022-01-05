// styled system
import styled from "styled-components";

export const PageLayout = styled.div`
  display: flex;
`;

export const PoolListContainer = styled.div`
  display: flex;
  width: 65%;
  background: #1a1b23;
  min-height: 100vh;
  flex-direction: column;
`;
export const DetailContainer = styled.div`
  display: flex;
  width: 35%;
  background: #23242f;
  min-height: 100vh;
  flex-direction: column;
`;

export const PoolListHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
`;
export const PoolListLayout = styled.div`
  margin-top: 65px;
  margin-left: 61px;
  margin-right: 24px;
`;

export const DetailHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;
export const DetailLayout = styled.div`
  margin: 76px 37px 0px 37px;
`;
