import styled from "styled-components";

export const TitlePage = styled.h2`
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.fonts.manrope.bold};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 24px;
  text-align: center;
  line-height: 1.45;
  margin: auto;
  padding: 40px 0;

  @media screen and (min-width: 767px) {
    font-size: 48px;
    padding: 80px 0;
  }
`;
