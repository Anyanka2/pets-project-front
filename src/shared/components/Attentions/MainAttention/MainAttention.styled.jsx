import styled from "styled-components";
import { theme } from "../../../styles/theme";

export const AttentionForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 608px;
  height: 429px;
  padding: 60px 40px;
  border-radius: 40px;
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadowDefault};
`;

export const AttenitonTitle = styled.h1`
  font-style: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.medium};
  font-size: 36px;
  line-height: 1.37;
  letter-spacing: 4;
`;

export const AttentionText = styled.p`
  text-align: center;
  font-style: ${theme.fonts.manrope};
  font-weight: ${theme.fontWeights.medium};
  font-size: 20px;
  line-height: 1.4;
`;

export const AttentionButtonLogIN = styled.button``;

export const AttentionButtonRegistration = styled.button``;
