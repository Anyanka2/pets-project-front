import { styled } from "styled-components";
import { theme } from "../../shared/styles/theme";
import { Link } from "react-router-dom";

export const AddPetLink = styled(Link)`
  position: fixed;
  z-index: 99;
  top: 50%;
  translate: 0 -50%;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 4px;
  width: 80px;
  height: 80px;
  border-radius: 50px;
  border: none;
  background: ${theme.colors.blueLink};
  box-shadow: ${theme.shadows.shadowDefault};
  font-family: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.semiBold};
  font-size: 12px;
  line-height: 1.33;
  color: ${theme.colors.white};
  cursor: pointer;

  &:focus,
  &:hover {
    background: ${theme.colors.blueGradient};
    transform: scale(1.07);
  }

  @media screen and (min-width: 768px) {
    position: static;
    margin-top: 60px;
    margin-left: auto;
    gap: 8px;
    flex-direction: row;
    width: 129px;
    background: ${theme.colors.blueLink};
    border-radius: 40px;
    height: 40px;
    font-weight: ${theme.fontWeights.bold};
    font-size: 16px;
    line-height: 1.375;
  }
`;
export const PlusIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${theme.colors.white};
`;