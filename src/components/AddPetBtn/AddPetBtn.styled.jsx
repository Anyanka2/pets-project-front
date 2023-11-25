import { styled } from "styled-components";
import { theme } from "../../shared/styles/theme";
import { Link } from "react-router-dom";

export const AddPetLink = styled(Link)`
  display: none;
  width: 80px;
  text-align: center;
  font-family: ${theme.fonts.manrope.regular};
  font-size: 12px;
  font-weight: ${theme.fontWeights.regular};
  color: ${theme.colors.white};
  background-color: ${theme.colors.blueLink};
  border-radius: 40px;
  border: none;
  padding: 8px 20px;
  //z-index: 999;
  //opacity: 1;

  cursor: pointer;
  outline: none;
  

  &:focus,
  &:hover {
    background: ${theme.colors.blueGradient};
    transform: scale(1.07);
  }

  @media screen and (min-width: 768px) {
    display: flex;
    width: 129px;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 8px 20px;
    border-radius: 40px;
    font-size: 16px;
    font-weight: ${theme.fontWeights.regular};
    //letter-spacing: 0.64px;
  }

  svg {
    stroke: ${theme.colors.white};
  }
`;
