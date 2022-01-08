// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const OrderTableLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
export const TitleLayout = styled.div`
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #ffffff;
  margin-bottom: 24px;
`;
export const OrderTable = styled.table`
  background: rgba(0, 0, 0, 0);
  border: none;
  border-collapse: separate;
  border-spacing: 0px 16px;
  td,
  th {
    border: none;
    padding-left: 24px;
    width: 25%;
  }
  td {
    text-align: left;
  }

  th {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 24px;
    font-feature-settings: "pnum" on, "lnum" on;
    color: #ffffff;
  }

  thead > tr {
    background: #23242f;
    border-radius: 50px;
    height: 64px;
    & > :first-child {
      border-radius: 16px 0 0 16px;
    }
    & > :last-child {
      border-radius: 0 16px 16px 0;
    }
  }
  tBody > tr {
    height: 56px;
  }
`;
export const ReceivedLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
export const IconLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-width: 40px;
  min-height: 40px;
`;
export const TextLayout = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Text = styled.div<{ color: string; size: number; weight: string }>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
  font-family: Poppins;
  font-style: normal;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  text-align: left;
`;
export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const TableLayout = styled.div`
  @media screen and (max-width: 491px) {
    overflow-x: scroll;
  }
`;
