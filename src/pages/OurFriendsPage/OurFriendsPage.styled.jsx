import { styled } from "styled-components";

export const StaledDiv = styled.div`
  margin-bottom: 24px;
  text-align: center;

  @media screen and (max-width: 747.98px) {
    font-size: 24px;
    margin-bottom: 24px;
  }

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 48px;
    margin-top: 0;
  }
  @media only screen and (min-width: 1280px) {
    margin-bottom: 60px;
  }
`;
