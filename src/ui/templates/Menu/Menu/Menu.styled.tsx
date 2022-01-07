import styled from "styled-components";

export const MenuLayout = styled.div`
  display: flex;
  height: 64px;
`;
export const LogoLayout = styled.div`
  margin-left: 22px;
`;
export const ItemGroup = styled.div`
  display: flex;
  height: 64px;
`;

export const LogoDefault = styled.div`
  display: block;
  min-width: 146px;
  min-height: 66px;
  @media screen and (max-width: 1100px) {
    display: none;
  }
`;
export const Logo = styled.div`
  display: none;
  min-width: 66px;
  min-height: 66px;
  @media screen and (max-width: 1100px) {
    display: block;
  }
`;
