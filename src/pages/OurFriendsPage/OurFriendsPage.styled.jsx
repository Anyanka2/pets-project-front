import { styled } from "styled-components";

export const StaledDiv = styled.div`
  margin-bottom: 24px;
  //margin-top: 40px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    margin-top: 0;
  }
  @media only screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;
