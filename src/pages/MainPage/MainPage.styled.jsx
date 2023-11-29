import styled from "styled-components";
import { theme } from "../../shared/styles/theme";
import mainImgMob from "../../assets/images/mainPage/main-img-mobile@2x.png";
import mainImgTab from "../../assets/images/mainPage/main-img-tablet@2x.png";
import mainImgDesk from "../../assets/images/mainPage/main-img-desktop@2x.png";

export const Wrapper = styled.div`
  /* position: relative; */
  /* width: 100vw; */
  height: 100vh;
  padding-top: 100px;
  /* margin: 0 auto; */
  background: url(${mainImgMob}) no-repeat;
  background-position-x: right;
  background-position-y: bottom;
  background-size: contain;

  @media only screen and (min-width: 768px) {
    /* max-width: 768px; */
    background: url(${mainImgTab}) no-repeat;
    background-position: right bottom;
    background-size: contain;
    padding-top: 60px;
  }
  @media only screen and (min-width: 1280px) {
    background: url(${mainImgDesk}) no-repeat;
    background-position: right bottom;
    background-size: contain;
    /* max-width: 1280px; */
    padding-top: 200px;
  }
`;

export const StyledPicture = styled.picture`
  @media only screen and (min-width: 1280px) {
    /* display: block; */
    /* margin-left: 363px; */
    
  }
`;

export const StyledTittle = styled.h1`
  /* margin-left: 20px; */
  /* margin-top: 60px; */
  font-size: 32px;
  font-family: ${theme.fonts.manrope.bold};
  font-weight: ${theme.fontWeights.bold};
  line-height: 1.375;

  @media only screen and (min-width: 768px) {
    max-width: 588px;
    /* margin-left: 32px;
    margin-bottom: 27px; */
    font-weight: ${theme.fontWeights.bold};
    font-size: 68px;
    line-height: 1.47;
  }

  @media only screen and (min-width: 1280px) {
    /* position: absolute; */
    //max-width: 501px;
    /* top: 25%; */
    /* margin-left: 16px; */
    font-weight: ${theme.fontWeights.extraBold};
    line-height: 1.3;
  }
`;
