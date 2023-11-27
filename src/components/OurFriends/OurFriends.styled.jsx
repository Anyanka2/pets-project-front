import styled from "@emotion/styled";
import { theme } from "../../shared/styles/theme.jsx";

export const StyledList = styled.ul`
  margin-top: 24px;
  margin-bottom: 24px;

  @media screen and (min-width: 748px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    row-gap: 20px;
  }
`;

export const StyledItem = styled.li`
  text-align: center;
  border-radius: 40px;
  padding: 16px;
  box-shadow: ${theme.shadows.shadowDefault};
  background-color: ${theme.colors.white};
  width: 280px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 767px) {
    :not(:first-of-type) {
      margin-top: 20px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 275px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 287px;
  }
`;

export const StyledName = styled.a`
  font-size: 24px;
  font-weight: ${theme.fontWeights.bold};
  color: ${theme.colors.blueLink};
  text-decoration: none;
`;

export const StyledImgThumb = styled.div`
  @media screen and (max-width: 747px) {
    width: 90px;
  }

  @media screen and (min-width: 748px) and (max-width: 1279px) {
    width: 140px;
  }

  @media screen and (min-width: 1280px) {
    width: 146px;
  }
`;

export const StyledImage = styled.img`
  max-width: 100%;
`;

export const StyledContacts = styled.p`
  font-size: 12px;
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.black};
  margin-top: 12px;

  @media screen and (min-width: 748px) and (max-width: 1279px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;

export const StyledContactsLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  font-weight: ${theme.fontWeights.medium};
  color: ${theme.colors.black};
  transition: color: ${theme.transitions.transitionRegular};

  :hover {
    color: ${theme.colors.blueLink};
  }

  @media screen and (min-width: 748px) and (max-width: 1279px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
  }
`;
