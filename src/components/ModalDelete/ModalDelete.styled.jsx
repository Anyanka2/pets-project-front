import { styled } from "styled-components";
import { theme } from "../../../shared/styles/theme";

export const Modal = styled.div`
width: 280px;
height: 302px;
text-align: center;
padding-top: 53px;
padding-bottom: 36px;
position: fixed;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
background-color:#fff;
border-radius: 20px;

  @media screen and (min-width: 768px) {
    width: 608px;
    height: 354px;
    padding-top: 84px;
    padding-bottom: 85px;
    border-radius: 40px;
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

export const DeleteText = styled.p`
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
align-items: center;

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

export const DeleteButton = styled.button`
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

export const DeleteButtonText = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.36;
  letter-spacing: 0.04em;
  color: #FEF9F9;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding-top: 9px;
  padding-bottom: 9px;
`;

export const CustomSvgModalLogOut = styled.svg`
width:24px;
height:24px;
fill: transparent;
stroke: ${theme.colors.white};
`;