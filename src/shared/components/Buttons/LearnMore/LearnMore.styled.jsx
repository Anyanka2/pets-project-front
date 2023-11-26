import styled from "styled-components";
import { theme } from "../../../styles/theme";
export const ButtonStyle = styled.button`
  width: 248px;
  height: 38px;
  border: 2px solid ${theme.colors.blueLink};
  border-radius: 40px;
  color: ${theme.colors.blueLink};
  background-color: transparent;
  font-family: ${theme.fonts.manrope.semiBold};
  font-weight: ${theme.fontWeights.semiBold};
  font-size: 16px;
  line-height: 1.37;
  @media screen and (max-width: 479px) {
  }
  &:hover {
    background-image: linear-gradient(to right, #9bd0ff 100%, #9bd0ff 100%);
    color: ${theme.colors.bgColorPage};
  }
`;
