import styled from "styled-components";
import { theme } from "../styles/theme";

export const TitlePage = styled.h2`
  color: ${theme.colors.black};
  font-family: ${theme.fonts.manrope.bold};
  font-weight: ${theme.fontWeights.bold};
  font-size: 24px;
  text-align: center;
  line-height: 1.45;
  margin-left: auto;
  margin-right:auto;
  padding-top: 40px;

  @media screen and (min-width: 767px) {
    font-size: 48px;
    padding-top: 80px;
  }
`;
