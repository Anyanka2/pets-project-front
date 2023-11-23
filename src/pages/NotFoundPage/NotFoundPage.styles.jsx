import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../../shared/styles/theme.jsx";

export const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

export const StyledTitle = styled.h2`
  margin-bottom: 24px;
`;

export const StyledPicture = styled.picture`
  max-width: 100%;
  border-radius: 4px;
  margin: 0;

  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }

  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 28px;
  margin: 24px 0 40px 0;
  width: 248px;
  height: 40px;
  background: ${theme.colors.blueLink};
  border: 1px solid ${theme.colors.blueLink};
  border-radius: 40px;
  color: ${theme.colors.bgColorPage};
  transform: scale(1);
  transition: transform 0.3s;
  font-family: ${theme.fonts.manrope.regular};
  font-weight: ${theme.fontWeights.bold};
  font-size: 16px;
  line-height: 21.86px;
  cursor: pointer;
  gap: 12px;
  position: relative;

  &:hover,
  &:focus {
    transform: scale(1.05);
    transition: transform 0.3s;
  }

  &:hover:before {
    left: 100%;
  }
`;
