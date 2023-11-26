import styled from 'styled-components';
import { Form } from 'formik';

export const FormBackground = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  height: 100vh;

  @media screen and (max-width: 1279px) {
    padding-top: 60px;
  }

  @media screen and (max-width: 767px) {
    padding-top: 20px;
  }
`;

export const AddFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 8px 16px;
  width: 100%;
  height: fit-content;
  min-height: 496px;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadowDefault};
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    padding: 20px 32px;
    width: fit-content;
    min-width: 458px;
  }

  @media screen and (min-width: 1280px) {
    padding: ${({ step, category }) =>
      step === 2 && category !== 'my-pet' ? '20px 74px' : '20px 32px'};
  }
`;

export const AddForm = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export const AddFormTitle = styled.h1`
  padding-left: 12px;
  margin-bottom: 24px;
  font-size: 20px;
  line-height: 1.35;
  font-weight: 500;

  color: ${({ theme }) => theme.colors.black};

  @media screen and (min-width: 768px) {
    font-size: 28px;
    text-align: center;

    padding-left: 0;
    }
`;

export const AddFormList = styled.ul`
  display: flex;
  column-gap: 12px;
  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    width: 392px;
    margin: 0 auto;
    margin-bottom: 20px;
    }
`;

export const AddFormItem = styled.li`
  position: relative;
  padding-bottom: 12px;
  flex-basis: calc((100% - 24px) / 3);

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 8px;

    background-color: ${({ theme }) => theme.colors.lightBlue};
    border-radius: 8px;
  }

  &.current::after {
    background-color: ${({ theme }) => theme.colors.blueLink};
  }

  &.completed::after {
    background-color: ${({ theme }) => theme.colors.green};
  }
`;

export const AddFormStepName = styled.p`
  font-weight: 500;
  font-size: 10px;
  line-height: 1.4;
  text-align: center;

  margin-bottom: 12px;

  color: ${({ theme }) => theme.colors.grey};

  ${AddFormItem}.current & {
    color: ${({ theme }) => theme.colors.blueLink};
  }

  ${AddFormItem}.completed & {
    color: ${({ theme }) => theme.colors.green};
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.62;
  }
`;

export const AddFormButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: ${({ category, isMoreInfo }) =>
      category !== 'your-pet' ? 'center' && isMoreInfo : 'end'};
      align-items: stretch;
      justify-content: space-evenly;
  }
`;