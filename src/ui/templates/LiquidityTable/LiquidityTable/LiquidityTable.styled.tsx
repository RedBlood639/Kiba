// styled system
import styled from "styled-components";

// -------------------------------------------------------
export const TableLayout = styled.div`
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
`;
export const Table = styled.table`
  background: rgba(0, 0, 0, 0);
  border: none;
  border-collapse: separate;
  border-spacing: 0px 16px;
  td,
  th {
    border: none;
    padding-left: 24px;
    width: 33%;
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
export const PoolLayout = styled.div`
  justify-content: flex-start;
  align-items: center;
  display: flex;
`;

export const FirstIconLayout = styled.div``;
export const SecondIconLayout = styled.div`
  margin-left: -20px;
  margin-right: 13px;
`;
export const IconLayout = styled.div`
  margin-right: 19px;
  display: flex;
  align-items: center;
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
`;
export const ButtonLayout = styled.div`
  padding: 12px 8px;
  display: flex;
  & > :first-child {
    margin-right: 16px;
  }
`;
export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 107px;
  height: 32px;
  border: 1px solid #e33319;
  box-sizing: border-box;
  border-radius: 8px;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 24px;
  font-feature-settings: "pnum" on, "lnum" on;
  color: #e33319;
`;
export const Layout = styled.div`
  @media screen and (max-width: 687px) {
    overflow-x: scroll;
  }
`;
