import styled from "styled-components";
import { theme } from "../../shared/styles/theme";

export const NewsBox = styled.div`
  display: flex ;
  flex-wrap: wrap;
  flex-direction: row;

`;

export const NewsCard = styled.div`
    width: 280px;
    
`;

export const NewsBlueHeader = styled.div`
    height: 8px;
    background-color: ${theme.colors.blueLink};
    margin-bottom: 12px;
    border-radius: 20px;
`;

export const NewsBody = styled.div`
    background-color: white;
    box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
    border-radius: 20px;
`;

export const NewsImg = styled.img`
    border-radius: 20px;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%,
     rgba(0, 0, 0, 0.20) 100%), 
     url(<path-to-image>), 
     lightgray -51.747px -57.091px / 132.658% 138.565% no-repeat;

    width: 280px;
    height: 255px;
    margin-bottom: 16px;
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
`;

export const NewsDescription = styled.p`
  padding-left: 12px;
  padding-right: 12px;
  margin-bottom: 40px;
  width: 256px;
  height: 154px;
  overflow: hidden;

  font-family: ${theme.fonts.manrope.regular};
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: ${theme.colors.black};
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
    text-align: right ;

    font-family: ${theme.fonts.manrope.medium};
    font-weight: 500;
    font-size: 16px;
    font-style: normal;
    line-height: normal;
`;

