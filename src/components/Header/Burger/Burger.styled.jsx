import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "../../../shared/styles/theme";

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  padding-top: 20px;
  border-radius: 10px;
  z-index: 1000;
  transform: translateX(${({ open }) => (open ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 82px 70px;

  @media screen and (min-width: 768px) {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 10px;
    z-index: 1000;
    transform: translateX(${({ open }) => (open ? "0" : "100%")});
    transition: transform 0.3s ease-in-out;
    padding: 0px 80px;
    padding-top: 24px;
  }
`;

export const LogoLinkBurger = styled(Link)`
  position: absolute;
  top: 24px;
  left: 16px;
`;

export const CloseIcon = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 1001;
  stroke: ${({ theme }) => theme.colors.yellow};

  @media screen and (min-width: 768px) {
    top: 34px;
    right: 32px;
  }
`;

export const MobileMenuItem = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  font-size: 32px;
  font-weight: 500;
  line-height: 1.36;

  &:hover {
    color: ${({ theme }) => theme.colors.yellow};
  }

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const ButtonsBurger = styled.button`
  min-width: 320px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-left: auto;
    margin-bottom: 92px;
  }
`;

export const LinkBurgerLogin = styled(Link)`
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
  }
  &:hover svg {
    fill: ${theme.colors.yellow};
  }
`;

export const LinkBurgerReg = styled(Link)`
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
  }
`;

export const BurgerNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 92px;

  @media screen and (min-width: 768px) {
    gap: 60px;
  }
`;

export const BurgerLogOutButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 20px;
  margin: 4px auto 4px auto;
  width: 135px;
  height: 40px;
  background: ${theme.colors.blueLink};
  border-radius: 40px;
  color: ${theme.colors.white};
  transform: scale(1);
  transition: transform 0.3s;
  font-family: ${theme.fonts.manrope.semiBold};
  font-weight: ${theme.fontWeights.bold};
  font-size: 16px;
  line-height: 21.86px;
  cursor: pointer;
  gap: 8px;
  position: absolute;
  top: 440px;
  left: 20px;

  &:hover,
  &:focus {
    background: ${theme.colors.blueGradient};
    color: ${theme.colors.white};
    fill: ${theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    top: 20px;
    left: 559px;
  }
`;
export const UserIconBurger = styled(Link)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`;
