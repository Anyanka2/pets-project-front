import { styled } from "styled-components";
import { theme } from "../../shared/styles/theme";

export const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 24px;

  @media only screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
  @media only screen and (min-width: 1280px) {
    margin-bottom: 42px;
  }
`;

export const NoticePanelLeft = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: space-between;

  align-items: center;
  z-index: 2;

  @media only screen and (min-width: 768px) {
    gap: 12px;
  }
`;

export const NoticePanelRigth = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  @media only screen and (min-width: 768px) {
    align-items: center;
    align-content: flex-start;
    gap: 12px;
  }
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

export const FilterIcon = styled.svg`
  width: 24px;
  height: 24px;
  stroke: ${theme.colors.blueLink};

  &:hover,
  &:focus {
    path {
      stroke: ${theme.colors.white};
    }
  }
`;
