import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: 320px;
  margin: 0 auto;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const StyledPicture = styled.picture`
  @media only screen and (min-width: 1280px) {
    display: block;
    margin-left: 363px;
  }
`;

export const StyledTittle = styled.h1`
  margin-left: 20px;
  margin-bottom: 20px;
  font-size: 32px;

  /* font-family: ;
  font-weight: ; */

  line-height: 1.375;

  @media only screen and (min-width: 768px) {
    max-width: 588px;
    margin-left: 32px;
    font-size: 68px;
    line-height: 1.48;
  }

  @media only screen and (min-width: 1280px) {
    position: absolute;
    max-width: 500px;
    top: 25%;
    margin-left: 16px;

    /* font-family: ;
  font-weight: ; */

    line-height: 1.3;
  }
`;
