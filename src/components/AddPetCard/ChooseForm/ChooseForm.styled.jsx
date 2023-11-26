import styled from 'styled-components';
import { Field } from 'formik';
import { visualyHidden } from '../../../shared/styles/visualyHidden';

export const CategoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ContainerForInput = styled.div`
 display: flex;
  flex-direction: column;
  
  margin-bottom: 90px;

  @media screen and (min-width: 768px) {
    margin-bottom: 137px;
  }
`;

export const AddFormRadioButton = styled(Field)`
  ${visualyHidden}
`;

export const RadioCategoryLabel = styled.label`
  padding: 8px 16px;
  margin-bottom: 12px;

  width: fit-content;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.36;
  letter-spacing: 0.04em;

  color: ${({ theme }) => theme.colors.blueLink};
  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 40px;
  cursor: pointer;

  transition: color 300ms ${({ theme }) => theme.transitionRegular},
    background-color 300ms ${({ theme }) => theme.transitionRegular};

  &:last-child {
    margin-bottom: 0;
  }

  &:hover,
  &:focus,
  ${AddFormRadioButton}:checked + & {
    background-color: ${({ theme }) => theme.colors.blueLink};
    color: ${({ theme }) => theme.colors.white};
  }
`;