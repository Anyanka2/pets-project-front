import styled from "styled-components";
import { theme } from "../../styles/theme";

export const SearchForm = styled.form``;

export const SearchLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: end;
  max-width: 608px;
  gap: 10px;
  border-radius: 20px;
  height: 44px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 10px;
  background-color: ${theme.colors.white};
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  @media screen and (max-width: 479px) {
    min-width: 280px;
    border-radius: 24px;
  }
`;

export const SearchInput = styled.input`
  font: Inter;
  font-weight: 400;
  font-size: 20px;
  color: ${theme.colors.grey};
  width: 100%;
  border: none;
  @media screen and (max-width: 479px) {
    font-size: 14px;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  justify-self: end;
  height: 24px;
  width: 24px;
  top: 10px;
  right: 20px;
  padding: 0;
  font-size: 16px;
  @media screen and (max-width: 479px) {
    right: 12px;
  }
`;

export const SearchIconStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: ${theme.colors.blueLink};
`;

export const CloseIconStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
