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
  font-size: 36px;
  line-height: 1.36;
  color: var(--black);
  margin-bottom: 40px;

  @media screen and (max-width: 767px) {
    font-size: 24px;
    line-height: 1.38;

    margin-bottom: 20px;
  }
`;

export const LogInFormEmailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error }) => (error ? '10px' : '32px')};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({ error }) => (error ? '7px' : '24px')};
  }
`;

export const LogInFormEmailInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;
  width: 100%;

  border: 1px solid var(--blue-link);
  border-radius: 40px;
`;

export const LogInFormPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  margin-bottom: ${({ error }) => (error ? '37.6px' : '60px')};

  @media screen and (max-width: 767px) {
    margin-bottom: ${({ error }) => (error ? '93px' : '110px')};
  }
`;

export const LogInFormPasswordInputContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 2px 16px;
  width: 100%;

  border: 1px solid var(--blue-link);
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
    stroke: var(--red);
  }
`;

export const ErrorMessage = styled.div`
  padding-left: 16px;
  margin-top: 4px;
  color: var(--red);

  
  font-weight: 400;
  @media screen and (max-width: 767px) {
    font-size: 11px;;
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
  stroke: ${({ error }) =>
    error ? 'var(--red)' : 'var(--blue-link)'};
}
`;

export const LogInBtn = styled.button`
  /* margin-top: 13px; */
  margin-bottom: 20px;
  width: 100%;

  padding: 10px 0 10px 0;

  background: linear-gradient(290deg, #419ef1 100%, #9bd0ff 100%);
  border: none;
  border-radius: 40px;

  font-weight: 600;
  font-size: 20px;
  line-height: 1.35;

  letter-spacing: 0.04em;

  color: #ffffff;

  @media screen and (max-width: 767px) {
    margin-bottom: 8px;
  }
`;

export const RegisterText = styled.p`
  font-weight: 400;
  font-size: 12px;
  line-height: 1.3;
  letter-spacing: 0.04em;
  color: var(--grey);
`;

export const RegisterLink = styled(Link)`
  text-decoration-line: underline;
  color: #54ADFF;
  display: inline;
  cursor: pointer;
`;