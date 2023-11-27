import styled from "styled-components";
import { theme } from "../../shared/styles/theme";

export const StaledDiv = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  
`;

export const NewsBox = styled.ul`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 24px;
  @media only screen and (min-width: 768px) {
    gap: 24px 32px;
  }
  @media only screen and (min-width: 1280px) {
    gap: 24px 30px;
  }

`;

export const NewsCard = styled.li`
  width: 280px;
  @media only screen and (min-width: 768px) {
    width: 336px;
  }
  @media only screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const NewsBlueHeader = styled.div`
  height: 8px;
  background: ${theme.colors.blueGradient};
  margin-bottom: 12px;
  border-radius: 20px;
  @media only screen and (min-width: 768px) {
    margin-bottom: 14px;
  }
`;

export const NewsBody = styled.div`
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadowDefault};
  border-radius: 20px;
`;

export const NewsImg = styled.img`
  border-radius: 20px;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url(<path-to-image>),
    lightgray -51.747px -57.091px / 132.658% 138.565% no-repeat;

  width: 100%;
  height: 255px;
  margin-bottom: 16px;
  @media only screen and (min-width: 768px) {
    
  }
`;

export const NewsTitle = styled.h3`
  font-family: ${theme.fonts.manrope.bold};
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  letter-spacing: -0.24px;
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 16px;
  height: 56px;
  overflow-y: hidden;
`;

export const NewsDescription = styled.p`
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 40px;
  /* width: 256px; */
  height: 154px;
  overflow: hidden;

  font-family: ${theme.fonts.manrope.regular};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.black};

  @media only screen and (min-width: 768px) {
    height: 132px;
  }
`;

export const NewsMore = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
`;

export const NewsDate = styled.p`
  font-family: ${theme.fonts.manrope.regular};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  color: ${theme.colors.grey};
`;

export const NewsReadMoreLink = styled.a`
  color: ${theme.colors.blueLink};
  text-align: right;

  font-family: ${theme.fonts.manrope.medium};
  font-weight: 500;
  font-size: 16px;
  font-style: normal;
  line-height: normal;
`;
