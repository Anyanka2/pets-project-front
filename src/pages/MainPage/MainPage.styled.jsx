import styled from "styled-components";
import { theme } from "../../shared/styles/theme";
import mainImgMob from "../../assets/images/mainPage/main_page_mob@1x.webp";
import mainImgMob2 from "../../assets/images/mainPage/main_page_mob@2x.webp";
import mainImgTab from "../../assets/images/mainPage/main_page_tablet@1x.webp";
import mainImgTab2 from "../../assets/images/mainPage/main_page_tablet@2x.webp";
import mainImgDesk from "../../assets/images/mainPage/main_page_desktop@1x.webp";
import mainImgDesk2 from "../../assets/images/mainPage/main_page_desktop@2x.webp";

export const Wrapper = styled.div`
  /* position: relative; */
  /* width: 100vw; */
  height: 100vh;
  padding-top: 100px;
  /* margin: 0 auto; */
  background: url(${mainImgMob}) no-repeat;
  background-position-x: 50% ;
  background-position-y: 100%;
  background-size: 137%;
  @media (min-resolution: 150dpi){
    background: url(${mainImgMob2}) no-repeat;
    background-position-x: 50% ;
    background-position-y: 100%;
    background-size: 137%;
  }

  @media only screen and (min-width: 768px) {
    /* max-width: 768px; */
    background: url(${mainImgTab}) no-repeat;
    background-position-x: center;
    background-position-y: 220px;
    background-size: 137%;
    padding-top: 60px;
    @media (min-resolution: 150dpi){
    background: url(${mainImgTab2}) no-repeat;
    background-position-x: center;
    background-position-y: 220px;
    background-size: 137%;
    }
  }
  @media only screen and (min-width: 1280px) {
    background: url(${mainImgDesk}) no-repeat;
    background-position-x: 60%;
    background-position-y: -25px ;
    background-size: 917px;
    /* max-width: 1280px; */
    padding-top: 200px;
    @media (min-resolution: 150dpi){
      background: url(${mainImgDesk2}) no-repeat;
      background-position-x: 60%;
      background-position-y: -25px ;
      background-size: 917px;
    }

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
