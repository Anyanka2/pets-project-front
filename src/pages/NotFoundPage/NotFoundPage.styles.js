import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NotFoundPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 60px;
`;

export const Title = styled.h2`
  margin-bottom: 24px;
`;

export const Image = styled.img`
  max-width: 100%;
  border-radius: 4px;
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
  background: #54adff;
  border: 1px solid #54adff;
  border-radius: 40px;
  color: #fef9f9;
  transform: scale(1);
  transition: transform 0.3s;
  font-family: "Manrope";
  font-weight: 700;
  font-size: 16px;
  line-height: 22px;
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
