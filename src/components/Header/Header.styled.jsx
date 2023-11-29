import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../shared/styles/theme";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 20px;

  @media screen and (min-width: 768px) {
    padding-top: 24px;
    justify-content: normal;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 20px;
  }
`;

export const LogoLink = styled(Link)`
  /*   z-index:1001; */

  @media screen and (min-width: 1280px) {
    margin-right: 159px;
  }
`;

export const Image = styled.img`
  width: 116px;
  height: 20px;
  max-width: none;

  @media screen and (min-width: 768px) {
    width: 162px;
    height: 28px;
  }
`;

export const CustomSvg = styled.svg`
  fill: ${({ theme }) => theme.colors.white};
  width: 24px;
  height: 24px;
`;

export const ButtonsContainer = styled.div`
  min-width: 320px;
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    gap: 20px;
    margin-left: auto;
    margin-right: 24px;
  }

  @media screen and (min-width: 1280px) {
    margin-right: 0px;
  }
`;

export const LinkLogin = styled(Link)`
  padding: 8px 20px 8px 20px;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.white};
  width: 165px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1.5;
  gap: 8px;
  font-weight: 700;

  &:hover {
    background: ${({ theme }) => theme.colors.white};
    color: ${theme.colors.yellow};
    border: 2px solid ${({ theme }) => theme.colors.yellow};
  }
  &:hover svg {
    fill: ${theme.colors.yellow};
  }
`;

export const LinkReg = styled(Link)`
  padding: 8px 20px 8px 20px;
  border: 2px solid ${({ theme }) => theme.colors.yellow};
  cursor: pointer;
  color: ${({ theme }) => theme.colors.yellow};
  width: 165px;
  border-radius: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1.5;
  gap: 8px;
  font-weight: 600;

  &:hover {
    background: ${({ theme }) => theme.colors.yellow};
    color: ${theme.colors.white};
    border: none;
  }
`;

export const BurgerButton = styled.button`
  stroke: ${({ theme }) => theme.colors.yellow};

  @media screen and (min-width: 1280px) {
    display: none;
  }
`;

export const LogOutContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: auto;
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
  }
`;
