import { styled } from "styled-components";

export const Modal = styled.div`
width: 100%;
text-align: center;
align-items: center;
justify-content: center;
padding-top: 77px;
padding-bottom: 60px;
padding-left: 12px;
padding-right: 12px;

  @media screen and (min-width: 768px) {
    width: 608px;
    padding-top: 108px;
    padding-bottom: 109px;
    padding-left: 24px;
    padding-right: 24px;
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
gap: 8px;

    @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 17px;
  }
`;

export const CancelButton = styled.button`
`;

export const LogoutButton = styled.button`
`;

export const LogoutButtonText = styled.p`
`;

export const LogoutIconSVG = styled.div`
display: flex;
align-items: center;
`;