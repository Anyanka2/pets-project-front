import { styled } from "styled-components";

export const Modal = styled.div`
width: 232px;
text-align: center;
padding-top: 44px;
padding-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 536px;
    padding-top: 36px;
  }
`;

export const TitleText = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #111111;
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 52px;
  }
`;

export const CongratsText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #111111;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 60px;
  }
`;

export const CongratsButton = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 248px;
  background-color: #54ADFF;
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

export const CongratsButtonText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #FEF9F9;

  padding-top: 9px;
  padding-bottom: 9px;
`;