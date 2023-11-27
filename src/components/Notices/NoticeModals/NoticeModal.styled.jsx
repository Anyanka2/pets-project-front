import styled from "styled-components";
import { theme } from "../../../shared/styles/theme";

export const Backdrop = styled.div`
  position: fixed;
  z-index: 1000;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${theme.colors.backdrop};
  backdrop-filter: blur(4px);
  overflow: auto;
  overflow-y: auto;
`;

export const Content = styled.div`
  min-height: 300px;
  width: 280px;
  background-color: ${theme.colors.white};
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 16px;
  overflow: 0;

  @media screen and (min-width: 768px) {
    top: 50%;
    width: 681px;
    padding: 0;
    border-radius: 40px;
  }
`;

export const Type = styled.p`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0px;
  gap: 10px;
  position: absolute;
  width: 126px;
  height: 32px;
  left: 0px;
  top: 16px;
  background: ${theme.colors.lightBlue};
  border-radius: 0px 16px 16px 0px;
  border: none;
  font-family: ${theme.fonts.manrope.semiBold};
  font-weight: ${theme.fontWeights.semiBold};
  font-size: 14px;
  line-height: 1.357;
`;

export const Image = styled.img`
  display: block;
  width: 240px;
  height: 240px;
  object-fit: cover;
  border-radius: 0px 0px 40px 40px;

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 298px;
    margin: 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  margin: 0 auto;
`;

export const ContainerInfo = styled.div`
  display: flex;
  gap: 12px;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
    padding: 32px 32px 24px;
  }
`;

export const BtnClose = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  right: 5px;
  top: 5px;
  border: none;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    right: 19px;
    top: 16px;
  }
`;

export const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 20px;
  text-align: justify;
  width: 198px;
  font-family: ${theme.fonts.manrope.bold};
  font-weight: ${theme.fontWeights.bold};
  font-size: 24px;
  line-height: 1.357;
  letter-spacing: -0.24px;
  color: ${theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.357;
    letter-spacing: -0.28px;
    width: 250px;
  }
`;

export const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Item = styled.li`
  margin: 0;
  font-family: ${theme.fonts.manrope.semiBold};
  font-weight: ${theme.fontWeights.semiBold};
  font-size: 14px;
  line-height: 1.357;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.37;
  }
`;
export const ItemWrap = styled.li`
  margin: 0;
  font-family: ${theme.fonts.manrope.regular};
  font-weight: ${theme.fontWeights.regular};
  font-size: 14px;
  line-height: 1.357;
  display: flex;
  align-items: center;
  text-align: center;
  color: ${theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.37;
  }
  a {
    color: ${theme.colors.yellow};
    &:hover {
      color: ${theme.colors.blueLink};
    }
  }
`;

export const Comment = styled.p`
  margin: 12px 0;
  padding: 0 12px;
  width: 256px;
  font-family: ${theme.fonts.manrope.regular};
  font-weight: ${theme.fontWeights.regular};
  font-size: 14px;
  line-height: 1.357;
  text-align: justify;
  display: flex;
  align-items: center;
  letter-spacing: 0.56px;
  color: ${theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.5;
    letter-spacing: 0.64px;
    text-align: left;
    width: 618px;
    margin: 0 auto;
    padding: 0;
  }
`;

export const ContactLink = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  max-width: 256px;
  padding: 8px 20px;
  gap: 8px;
  border: 2px solid ${theme.colors.blueLink};
  background: transparent;
  border-radius: 40px;
  font-family: ${theme.fonts.manrope.regular};
  font-weight: ${theme.fontWeights.regular};
  font-size: 16px;
  line-height: 1.357;
  letter-spacing: 0.64px;
  color: ${theme.colors.blueLink};

  &:hover,
  &:focus {
    transform: scale(1.07);
    background: ${theme.colors.blueGradient};
    color: ${theme.colors.white};
    border: none;
  }

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

export const AddToFavBtn = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 20px;
  gap: 8px;
  width: 256px;
  height: 40px;
  background: ${theme.colors.blueLink};
  border-radius: 40px;
  border: none;
  font-family: ${theme.fonts.manrope.regular};
  font-style: normal;
  font-weight: ${theme.fontWeights.regular};
  font-size: 16px;
  line-height: 1.37;
  letter-spacing: 0.64px;
  color: ${theme.colors.bgColorPage};

  svg {
    stroke-width: 0.3px;
  }

  cursor: pointer;

  &:focus,
  &:hover {
    background: ${theme.colors.blueGradient};
    transform: scale(1.07);
  }

  @media screen and (min-width: 768px) {
    width: 129px;
    
  }
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 17px;
    margin: 0 auto;
    justify-content: flex-end;
    margin-top: 70px;
    padding-right: 31px;
    padding-bottom: 24px;
  }
`;
export const HeartIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${theme.colors.white};
`;
