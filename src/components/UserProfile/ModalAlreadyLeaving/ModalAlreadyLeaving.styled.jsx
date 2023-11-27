import { styled } from "styled-components";

export const Modal = styled.div`
width: 232px;
text-align: center;
align-items: center;
justify-content: center;
padding-top: 53px;
padding-bottom: 36px;

  @media screen and (min-width: 768px) {
    width: 536px;
    padding-top: 84px;
    padding-bottom: 85px;
  }
`;

export const TitleText = styled.h2`
  font-weight: 500;
  font-size: 24px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #111111;
  margin-bottom: 44px;

  @media screen and (min-width: 768px) {
    font-size: 36px;
    margin-bottom: 48px;
  }
`;

export const ButtonContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 8px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 17px;
  }
`;

export const CancelButton = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #54ADFF;
  border: 2px solid #54ADFF;
  border-radius: 40px;

  width: 256px;
  padding-top: 9px;
  padding-bottom: 9px;

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 256px;
  background-color: #54ADFF;
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    width: 129px;
  }
`;

export const LogoutButtonText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #FEF9F9;

  padding-top: 9px;
  padding-bottom: 9px;
`;

export const LogoutIconSVG = styled.div`
`;