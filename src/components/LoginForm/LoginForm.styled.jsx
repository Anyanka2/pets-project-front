import { Field } from 'formik';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LogInForm = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogInFormTitle = styled.h1`
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

export const LogInFormEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error }) => (error ? '1px' : '14px')};

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ error }) => (error ? '10px' : '32px')};
  }
`;

export const LogInFormEmailInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.blueLink};
  border-radius: 40px;
`;

export const LogInFormPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error, secure }) => (error || secure ? '97px' : '110px')};

  @media screen and (min-width: 768px) {
    margin-bottom: ${({ error, secure }) => (error || secure ? '37.6px' : '60px')};
  }
`;

export const LogInFormPasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;
  width: 100%;

  border: 1px solid ${({ theme }) => theme.colors.blueLink};
  border-radius: 40px;
`;

export const LogInFormInput = styled(Field)`
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

export const PasswordIcon = styled.span`
  display: flex;
  align-items: center;
`;

export const EyeIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;

  & svg {
  stroke: ${({ theme, error }) =>
      error ? theme.colors.red : theme.colors.blue};
}
`;

export const LoginErrorMessage = styled.div`
  padding: 0px 16px 15px 16px;
  color: ${({ theme }) => theme.colors.red};
`;

export const LogInBtn = styled.button`
  margin-bottom: 8px;
  width: 100%;

  padding: 10px 0 10px 0;

  background: linear-gradient(290deg, #419ef1 100%, #9bd0ff 100%);
  border: none;
  border-radius: 40px;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;

  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const RegisterText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: ${({ theme }) => theme.colors.grey};
`;

export const RegisterLink = styled(Link)`
  text-decoration-line: underline;
  color: #54ADFF;
  display: inline;
  cursor: pointer;
`;