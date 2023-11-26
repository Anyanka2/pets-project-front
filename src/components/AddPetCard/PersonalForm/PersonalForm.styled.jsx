import styled from 'styled-components';
import { Field } from 'formik';

export const PersonalFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerForInput = styled.div`
margin-bottom: 30px;

@media screen and (min-width: 768px) {
    margin-bottom: 40px;
  }
`;

export const AddFormLabelWrapper = styled.div`
  position: relative;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const AddFormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;

  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    gap: 8px;
    font-size: 20px;
    line-height: 1.3;
  }
`;

export const AddFormInput = styled(Field)`
  padding: 10px 16px;

  font-size: 14px;
  line-height: 1.5;

  border: 1px solid ${({ theme }) => theme.colors.blueLink};
  border-radius: 40px;
  outline-color: ${({ theme }) => theme.colors.blueLink};
  transition: outline 300ms ${({ theme }) => theme.transitionRegular};

  &.invalid {
    border-color: ${({ theme }) => theme.colors.red};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    min-width: 394px;
    padding: 12px 16px;
  }

  &[type='date']::-webkit-calendar-picker-indicator {
    cursor: pointer;
  }
`;