import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { theme } from "../../../shared/styles/theme";

export const List = styled.ul`
  //margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media screen and (min-width: 768px) {
    //margin-top: 43px;
    gap: 12px;
  }
`;

export const ListItem = styled.ul`
  display: flex;
`;

export const Button = styled(NavLink)`
  position: relative;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  font-family: ${theme.fonts.manrope.medium};
  font-weight: ${theme.fontWeights.medium};
  font-size: 14px;
  color: ${theme.colors.blueLink};
  background-color: ${theme.colors.lightBlue};
  border: none;
  height: 35px;
  border-radius: 40px;
 

  &.active {
    color: ${theme.colors.white};
    background-color: ${theme.colors.blueLink};
  }

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0;
    width: 100%;
    height: 100%;
    background: ${theme.colors.blueGradient};
    border-radius: 40px;
    opacity: 0;
    z-index: -1;
    transition: opacity 300ms ${theme.shadows.shadowDefault};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &:hover,
  &:focus {
    color: ${theme.colors.white};
    background-color: ${theme.colors.blueLink};
  }
`;
