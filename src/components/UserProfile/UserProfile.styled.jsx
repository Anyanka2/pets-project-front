import styled from "styled-components";
import { theme } from "../../shared/styles/theme.jsx";


export const UserProfileSection = styled.div`
  h2 {
    margin-bottom: 24px;
    font-family: ${theme.fonts.manrope.medium};
    font-size: 20px;
    font-weight: 500;
    @media screen and (min-width: 768px) {
      font-size: 28px;
    }
  }
`;

export const UserProfileContainer = styled.div`
  max-width: 280px;
  border-radius: 20px;
  background-color: white;
  box-shadow: 3px 8px 14px 0px rgba(136, 198, 253, 0.19);
  padding: 20px 8px 25px 8px;

  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    max-width: 704px;
    flex-direction: row-reverse;
    justify-content: flex-end;
    gap: 71px;
    padding: 20px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 395px;
    flex-direction: column;
    padding: 20px 24px 20px 16px;
  }
`;

export const UserPhotoBox = styled.div`
  margin: 0 auto;
  position: relative;
  height: 241px;

  /* &::after{
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' %3E%3Cpath fill='%2354ADFF' d='m5 15.7-.53-.52a.75.75 0 0 0-.22.53H5ZM15.7 5l.54-.53a.75.75 0 0 0-1.06 0l.53.53ZM19 8.3l.53.52c.3-.29.3-.76 0-1.06L19 8.3ZM8.3 19v.75c.2 0 .38-.08.52-.22L8.3 19ZM5 19h-.75c0 .41.34.75.75.75V19Zm6.59-.75a.75.75 0 0 0 0 1.5v-1.5Zm7 1.5a.75.75 0 0 0 0-1.5v1.5ZM5.53 16.24l10.7-10.71-1.05-1.06-10.71 10.7 1.06 1.07Zm9.65-10.71 3.29 3.3 1.06-1.07-3.3-3.29-1.05 1.06Zm3.29 2.23L7.77 18.47l1.05 1.06 10.71-10.7-1.06-1.07ZM8.29 18.25H5v1.5h3.3v-1.5ZM5.75 19v-3.3h-1.5V19h1.5Zm6.96-11L16 11.3l1.06-1.07-3.3-3.29L12.72 8Zm-1.12 11.75h7v-1.5h-7v1.5Z'/%3E%3C/svg%3E");
    width: 24px;
    height: 24px;
    position: absolute;
    top: -8px;
    right: -30px;
    } */

  @media screen and (min-width: 768px) {
    margin: 0;
    &::after {
      right: -34px;
    }
  }

  @media screen and (min-width: 1280px) {
    margin: 0 auto;
    &::after {
      right: -92px;
    }
  }
`;

export const UserImg = styled.img`
  width: 182px;
  height: 182px;
  
`;

export const EditImg = styled.button`
  width: 100%;
  position: absolute;
  bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none'%3e%3cpath stroke='%2354ADFF' stroke-linejoin='round' stroke-width='1.5' d='M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z'/%3e%3cpath stroke='%2354ADFF' stroke-linejoin='round' stroke-width='1.5' d='M3 9c0-1.1.9-2 2-2h2.5a1 1 0 0 0 1-1 1 1 0 0 1 1-1h5a1 1 0 0 1 1 1 1 1 0 0 0 1 1H19a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z'/%3e%3c/svg%3e");
    margin-right: 8px;
  }
`;

export const EditBtn = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: -10px;
  right: -10px;

`;

export const CancelEditBtn = styled.button`
  width: 24px;
  height: 24px;
  position: absolute;
  top: -10px;
  right: -10px;
  
`;

export const Modal = styled.div`
background-color: #222;
z-index: 100;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  color: white;
  transition: background-color 700ms ${theme.transitions.transitionRegular};
`;