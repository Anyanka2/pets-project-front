import { styled } from "styled-components";

export const NoticeCategoryPanel = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const StaledDiv = styled.div`
  margin-top: 24px;
  margin-bottom: 20px;

  @media only screen and (min-width: 768px) {
    margin-top: 40px;
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 1280px) {
    margin-bottom: 43px;
  }
`;
