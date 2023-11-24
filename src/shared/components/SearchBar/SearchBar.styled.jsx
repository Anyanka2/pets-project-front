import styled from "styled-components";

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  display: flex;
  padding-left: 20px;
  position: relative;
  max-width: 608px;
  height: 44px;
  @media screen and (max-width: 479px) {
    min-width: 280px;
  }
`;

export const SearchInput = styled.input`
  font: Inter;
  font-weight: 400;
  font-size: 20px;
  color: #888888;
  padding-left: 20px;
  height: 44px;
  width: 100%;
  background-color: #ffffff;
  border-radius: 20px;
  border: 0;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  @media screen and (max-width: 479px) {
    border-radius: 24px;
    font-size: 14px;
  }
`;

export const SearchButton = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
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

export const SearchAndCloseIcon = styled.span`
  display: flex;
  align-items: center;
`;

export const SearchIconStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  fill: #54adff;
`;

export const CloseIconStyle = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
