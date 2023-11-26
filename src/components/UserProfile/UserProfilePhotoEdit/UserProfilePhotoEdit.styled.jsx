import styled from 'styled-components';
import { theme } from "../../../shared/styles/theme.jsx";
import iconCheck from "../../../assets/icons/check.svg";
import iconDecline from "../../../assets/icons/cross-small-red.svg";


export const LableForHiddenInput = styled.label`
  width: 100%;
  position: absolute;
  bottom: -34px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  font-family: ${theme.fonts.manrope.regular};
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: 0.48px;
  color: ${theme.colors.black};

  &::before {
    content: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3e%3cpath stroke='%2354ADFF' stroke-linejoin='round' stroke-width='1.5' d='M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'/%3e%3cpath stroke='%2354ADFF' stroke-linejoin='round' stroke-width='1.5' d='M3 9c0-1.1.9-2 2-2h2.5a1 1 0 0 0 1-1 1 1 0 0 1 1-1h5a1 1 0 0 1 1 1 1 1 0 0 0 1 1H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z'/%3e%3c/svg%3e");
    width: 24px;
    height: 24px;
  }

  @media screen and (min-width: 768px) {
    bottom: 14px;
  }
  @media screen and (min-width: 1280px) {
    bottom: -34px;
  }
`;

export const HiddenInputFile = styled.input`
  position: absolute;
  height: 1px;
  width: 1px;
  overflow: hidden;
`;

export const ImgBtnAccept = styled.button`
  width: 24px;
  height: 24px;
  background: url(${iconCheck}) no-repeat;
`;

export const ImgBtnDecline = styled.button`
  width: 24px;
  height: 24px;
  background: url(${iconDecline}) no-repeat;
  
`;

export const ImgAcceptBox = styled.button`
  width: 100%;
  position: absolute;
  bottom: -34px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  font-family: ${theme.fonts.manrope.regular};
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  line-height: 1.83;
  letter-spacing: 0.48px;
  color: ${theme.colors.black};

  @media screen and (min-width: 768px) {
    bottom: 14px;
  }

  @media screen and (min-width: 1280px) {
    bottom: -34px;
  }
`;