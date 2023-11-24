import styled from "styled-components";

export const StyledContainer = styled.div`
  max-width: 320px;
  margin: 0 auto;
  padding: 20px 20px 0px 20px;

  @media screen and (min-width: 768px) {
    max-width: 768px;
    padding-left: 32px;
    padding-right: 32px;
    padding-top: 24px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 1280px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 20px;
  }
`;
