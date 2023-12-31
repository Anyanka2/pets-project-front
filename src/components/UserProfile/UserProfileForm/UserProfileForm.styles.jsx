import styled from "styled-components";
import { theme } from "../../../shared/styles/theme.jsx";
import {Form, Field} from 'formik';

export const StyledForm = styled(Form)`
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media screen and (min-width: 768px) {
        gap: 10px;
    }
`;

export const StyledField = styled(Field)`
  width: 190px;
  height: 24px;
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.blueLink};

  font-family: ${theme.fonts.manrope.regular};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.48px;
  color: ${theme.colors.black};
  @media screen and (min-width: 768px) {
    width: 255px;
    font-size: 16px;
    letter-spacing: 0.64px;

    height: 30px;
  }

  @media screen and (min-width: 1280px) {
    
    
  }
  
`;

export const StyledErrorMessage = styled.div`
    color: ${theme.colors.red};
    font-size: 10px;
    font-family: ${theme.fonts.manrope.regular};
    font-weight: 400;

    position: absolute;
    top: 24px;
    left: 16px;

    @media screen and (min-width: 768px) {
        font-size: 12px;
        top: 24px;
        left: 16px;
    }

`;

export const StyledLabel = styled.label`
    color: ${theme.colors.black};
    font-family: ${theme.fonts.manrope.medium};
    font-weight: 400;
    font-size: 14px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (min-width: 768px) {
      gap: 16px;
      font-size: 18px;
      letter-spacing: 0.72px;
      font-family: ${theme.fonts.manrope.semiBold};
    }

    @media screen and (min-width: 1280px) {
      
    }
    
`;

export const StyledInputWrapper = styled.div`
    position: relative ;
`;

export const StyledSubmitBtn = styled.button`
    align-self: center;
    width: 248px;
    height: 31px;
    padding-top: 6px;
    padding-bottom: 6px;
    margin-top: 10px;
    border-radius: 40px;
    background-color: ${theme.colors.blueLink};
    color: ${theme.colors.white};
    text-align: center;
    font-family: ${theme.fonts.manrope.bold};
    font-weight: 700;
    letter-spacing: 0.56px;
    font-size: 14px;
    

    @media screen and (min-width: 768px) {
      width: 255px;
      align-self: end;
      padding-top: 5px;
      padding-bottom: 5px;
      margin-top: 0;
      font-size: 16px;
    }

`;

export const LogoutBtn = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 12px;

    font-family: ${theme.fonts.manrope.semiBold };
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    letter-spacing: 0.64px;
    color: ${theme.colors.grey};

    margin-top: 9px;

      &::before{
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3E%3Cpath stroke='%2354ADFF' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M14 4h4a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-4M3 12h12M3 12l4-4m-4 4 4 4'/%3E%3C/svg%3E");
        width: 24px;
        height: 24px;
        
        fill: #54ADFF;
    }

    @media screen and (min-width: 768px) {
      margin-top: 5px;
    
  }
  @media screen and (min-width: 1280px) {
      margin-top: 13px;
    
  }
`;

export const ReactDatePicker = styled(Field)`
width: 190px;
  height: 24px;
  padding: 4px 12px;
  border-radius: 20px;
  border: 1px solid ${theme.colors.blueLink};

  font-family: ${theme.fonts.manrope.regular};
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.48px;
  color: ${theme.colors.black};
  @media screen and (min-width: 768px) {
    width: 255px;
    font-size: 16px;
    letter-spacing: 0.64px;

    height: 30px;
  }

  @media screen and (min-width: 1280px) {
    
    
  }
`