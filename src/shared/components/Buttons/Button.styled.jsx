import { theme } from "../../styles/theme";
import { styled } from "styled-components";
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  color: ${theme.colors.blueLink};
  width: 152px;
  height: 40px;
  padding: 8px 20px;
  border-radius: 40px;
  border: 2px solid ${theme.colors.blueLink};
  background: transparent;
  margin: 0 auto;

  &:hover,
  &:focus {
    background: ${theme.colors.blueGradient};
    color: ${theme.colors.white};
  }
`;