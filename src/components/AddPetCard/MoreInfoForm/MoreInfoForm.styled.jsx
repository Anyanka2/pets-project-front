import styled from 'styled-components';
import { Field } from 'formik';
import {
  AddFormInput,
  AddFormLabel,
} from '../PersonalForm/PersonalForm.styled';
import { AddFormRadioButton } from '../ChooseForm/ChooseForm.styled';
import { visualyHidden } from '../../../shared/styles/visualyHidden';

export const MoreInfoFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    ${({ category }) => category !== 'my-pet' ? 'flex-direction: row; column-gap:44px' : ''};
      margin-bottom: 60px;
  }
`;

export const FirstPartFormWrapper = styled.div`
  display: flex;
  ${({ category }) => (category !== 'my-pet' ? 'flex-direction: column;' : '')};
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    ${({ category }) => (category !== 'my-pet' ? 'row-gap: 38px;' : '')};
    ${({ category }) => (category !== 'sell' ? 'row-gap: 22px;' : '')};
    margin-bottom: 0px;
    align-items: flex-start;
  }
`;

export const SecondPartFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FileInput = styled(Field)`
  ${visualyHidden}
`;

export const AddFormTextAreaLabel = styled(AddFormLabel)`
  @media screen and (min-width: 768px) {
    height: 100%;
  }
`;

export const AddFormTextArea = styled(AddFormInput)`
  resize: none;
  height: 92px;
  flex-grow: 1;

  border-radius: 20px;
`;

export const AddFormSexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  column-gap: 16px;

  @media screen and (min-width: 768px) {
  }

  & p {
    font-weight: 500;
    font-size: 14px;
    line-height: 1.36;

    color: ${({ theme }) => theme.colors.black};

    @media screen and (min-width: 768px) {
      font-size: 20px;
      line-height: 1.3;
      margin-bottom: 8px;
    }
  }
`;

export const AddFormRadioWrapper = styled.div`
  display: inherit;
  margin-bottom: 10px;
`;

export const AddFormSexLabelFemale = styled.label`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 15px;
  stroke: ${({ theme }) => theme.colors.red};

  color: #888888;

  cursor: pointer;
  transition: color 300ms ${({ theme }) => theme.transitionRegular};

  &:hover {
    color: ${({ theme }) => theme.colors.blueLink};
  }

  ${AddFormRadioButton}:checked + & {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blueLink};
    border-radius: 20px;
    stroke: white;
    padding: 8px 15px;
  }
`;

export const AddFormSexLabelMale = styled.label`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  padding: 8px 15px;
  
  stroke: ${({ theme }) => theme.colors.blueLink};

  color: #888888;

  cursor: pointer;
  transition: color 300ms ${({ theme }) => theme.transitionRegular};

  &:hover {
    color: ${({ theme }) => theme.colors.blueLink};
  }

  ${AddFormRadioButton}:checked + & {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.blueLink};
    border-radius: 20px;
    stroke: white;
    padding: 8px 15px;
  }
`;

export const ContainerSex = styled.div`
  margin-left: 19px;
`;

export const AddFormImageLabel = styled(AddFormLabel)`
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 55px;

  @media screen and (min-width: 768px) {
    ${({ category }) =>
      category !== 'my-pet' ? 'flex-direction: column' : ''};
  }
`;

export const AddFormImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 112px;
  height: 112px;

  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.blueLink};

  cursor: pointer;
  overflow: hidden;
  object-position: center;
  object-fit: cover;

  & svg {
    stroke: currentColor;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media screen and (min-width: 768px) {
    min-width: 182px;
    height: 182px;
  }
`;