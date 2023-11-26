import styled, { keyframes, css } from 'styled-components';
import { Link } from 'react-router-dom';

const moveArrow = keyframes`
0% {
  transform: translateX(0);
}
15% {
  transform: translateX(15%);
}
60% {
  transform: translateX(-30%);
}
100% {
  transform: translateX(0);
}
`;

const buttonBack = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;

  padding: ${({ theme }) => 2 * 2 + 'px'} 0;

  max-height: 40px;

  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;

  color: ${({ theme }) => theme.colors.blueLink};
  background-color: transparent;
  border: none;

  transition: color 300ms ${({ theme }) => theme.transitionRegular};

  & svg {
    stroke: currentColor;
  }

  &:hover svg,
  &:focus svg {
    animation: ${moveArrow} 600ms linear infinite;
  }
`;

const buttonNext = css`
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 9px 0;
  gap: 12px;

  min-width: 248px;

  font-family: 'Manrope';
  font-size: 16px;
  font-weight: 700;
  line-height: 1.38;

  color: ${({ theme }) => theme.colors.white};
  background-color: #54ADFF;
  border: none;
  border-radius: 40px;
  transition: color ${({ theme }) => theme.transitions.transitionRegular},
    background-color ${({ theme }) => theme.transitions.transitionRegular};
  overflow: hidden;

  margin-bottom: 20px;

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(290.46deg, rgb(65, 158, 241) 0%, rgb(155, 208, 255) 107.89%);
    opacity: 0;
    transition: opacity ${({ theme }) => theme.transitions.transitionRegular};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  & svg {
    fill: currentColor;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.grey};
    background-color: ${({ theme }) => theme.colors.lightBlue};
    border-color: ${({ theme }) => theme.colors.lightBlue};
    pointer-events: none;
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 0px;
  }
`;

export const NextButton = styled.button`
  ${buttonNext}
`;

export const BackButton = styled.button`
  ${buttonBack}
`;

export const BackLink = styled(Link)`
  ${buttonBack}
`;