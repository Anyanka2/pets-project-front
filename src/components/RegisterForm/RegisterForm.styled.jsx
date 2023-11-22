import { Field } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const RegisterFormEl = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterFormTitle = styled.h1`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.38;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    line-height: 1.36;
    
  margin-bottom: 40px;
  }
`;

export const RegisterFormUsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error }) => (error ? '1px' : '14px')};

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ error }) => (error ? '10px' : '32px')};
  }
`;

export const RegisterFormUsernameInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.blueLink)};
  border-radius: 40px;
`;

export const RegisterFormEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error }) => (error ? '1px' : '14px')};

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ error }) => (error ? '10px' : '32px')};
  }
`;

export const RegisterFormEmailInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({ theme, error }) => (error ? theme.colors.red : theme.colors.blueLink)};
  border-radius: 40px;
`;

export const RegisterFormInput = styled(Field)`
  padding: 12px 0;
  line-height: 1.5;
  letter-spacing: 0.04em;

  width: 100%;
  height: 48px;
  border: none;
  outline: none;
`;

export const ErrorIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({ theme }) => theme.colors.red};
  }
`;

export const ErrorMessage = styled.div`
  padding-left: 16px;
  margin-top: 1px;
  color: ${({ theme }) => theme.colors.red};

  font-size: 10px;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-top: 4px;
  }
`;

export const RegisterFormPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error, secure }) => (error || secure ? '1px' : '14px')};

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ error, secure }) => (error || secure ? '10px' : '32px')};
  }
`;

export const RegisterFormPasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;

  border: 1px solid
    ${({ theme, error, secure }) =>
      error
        ? theme.colors.red
        : secure
        ? theme.colors.green
        : theme.colors.blueLink};
  border-radius: 40px;
`;

export const PasswordIcon = styled.span`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EyeIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({ theme, error, secure }) =>
      error
        ? theme.colors.red
        : secure
        ? theme.colors.green
        : theme.colors.blueLink};
  }
`;

export const CheckMarkIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
    stroke: ${({ theme }) => theme.colors.green};
  }
`;

export const InfoMessage = styled.div`
  padding-left: 16px;
  margin-top: 1px;
  color: ${({ theme }) => theme.colors.green};

  font-weight: 400;
  font-size: 10px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    margin-top: 4px;
  }
`;

export const RegisterErrorMessage = styled.div`
  padding: 15px 16px 0 16px;
  color: ${({ theme }) => theme.colors.red};
`;

export const RegisterBtn = styled.button`
  margin-top: 26px;
  margin-bottom: 8px;
  width: 100%;

  padding: 10px 0 10px 0;

  background: ${({ theme }) => theme.colors.blueLink};
  border: none;
  border-radius: 40px;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;

  letter-spacing: 0.04em;

  color: #ffffff;

  @media screen and (min-width: 768px) {
    margin-top: 20px;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 1280px) {
    margin-top: 8px;
  }
`;

export const LoginText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const LoginLink = styled(Link)`
  text-decoration-line: underline;
  color: ${({ theme }) => theme.colors.blueLink};
  display: inline;
  cursor: pointer;
`;