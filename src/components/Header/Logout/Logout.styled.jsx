import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../shared/styles/theme";

export const CustomSvg = styled.svg`
  fill: ${theme.colors.white};
  width: 24px;
  height: 24px;
`;
export const StyledLink = styled(Link)`
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

  @media screen and (min-width: 768px){
   display:none;
  }

  @media screen and (min-width: 1280px) {
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
    top: 20px;
    left: 84%;

    &:hover,
    &:focus {
      background: ${theme.colors.blueGradient};
      color: ${theme.colors.white};
      fill: ${theme.colors.white};
    }
  }
`;
