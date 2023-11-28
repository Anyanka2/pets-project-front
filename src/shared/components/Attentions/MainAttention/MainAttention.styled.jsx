import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const AttentionForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
  width: 608px;
  padding: 60px 40px;
  border-radius: 40px;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadowDefault};
  @media screen and (max-width: 479px) {
    width: 280px;
    border-radius: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const AttenitonTitle = styled.h1`
  color: ${theme.colors.black};
  text-align: center;
  font-family: ${theme.fonts.manrope.medium};
  font-size: 36px;
  font-weight: ${theme.fontWeights.medium};
  font-style: normal;
  line-height: 1.37;
  letter-spacing: 0.8px;
  margin-bottom: 40px;
  @media screen and (max-width: 479px) {
    font-size: 24px;
    line-height: 1.29;
    letter-spacing: 0.56px;
  }
`;

export const AttentionText = styled.p`
  color: ${theme.colors.black};
  text-align: center;
  font-family: ${theme.fonts.manrope.medium};
  font-style: normal;
  font-weight: ${theme.fontWeights.medium};
  font-size: 20px;
  line-height: 1.4;
  letter-spacing: 0, 8px;
  margin-bottom: 40px;
  @media screen and (max-width: 479px) {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: 0.56px;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 479px) {
    flex-direction: column;
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

  @media screen and (max-width: 479px) {
    width: 240px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.orangeGradient};
    border: none;
    letter-spacing: 1px;
    box-shadow: ${({ theme }) => theme.shadows.shadowHover};
    transition: all 0.4s ease 0s;
  }
`;

export const ImgLogin = styled.img`
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
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

  @media screen and (max-width: 479px) {
    width: 240px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors.orangeGradient};
    color: ${({ theme }) => theme.colors.white};
    border: none;
    letter-spacing: 1px;
    box-shadow: ${({ theme }) => theme.shadows.shadowHover};
    transition: all 0.4s ease 0s;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 24px;
  height: 24px;
  @media screen and (max-width: 479px) {
    top: 16px;
    right: 16px;
  }
`;

export const CloseIconStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${theme.colors.blueLink};
`;
