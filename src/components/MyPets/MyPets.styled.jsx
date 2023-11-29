import styled from "styled-components";
import { theme } from "../../shared/styles/theme";

export const AllCardsPet = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 768px) {
  }
`;

export const ContainerItem = styled.div`
  background-color: white;
  box-shadow: ${theme.shadows.shadowDefault};
  padding: 20px;
  border-radius: 40px;
  position: relative;
  display: flex;
&:last-child {
      margin-bottom: 42px;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    

  @media screen and (min-width: 1280px) {
    width: 821px;
  }
  }
`;

export const TitlePet = styled.h2`
  color: #111111;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.36;
  margin-bottom: 31px;
  font-family: ${theme.fonts.manrope.medium};
  @media screen and (min-width: 768px) {
    margin-bottom: 22px;
    font-size: 28px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const TitleWithoutPet = styled.h2`
  text-align: center;
  color: #111111;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.36;
  margin-bottom: 31px;
  font-family: ${theme.fonts.manrope.medium};
  @media screen and (min-width: 768px) {
    margin-bottom: 22px;
    font-size: 28px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 0;
  }
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 20px;
  object-fit: cover;

  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }

  @media screen and (min-width: 768px) {
    width: 128px;
    height: 128px;
  }

  @media screen and (min-width: 1280px) {
    width: 161px;
    height: 161px;
    border-radius: 40px;
  }
`;

export const InfoContainer = styled.div`
  padding-top: 20px;
  padding-bottom: 40px;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
    padding-top: 0;
    padding-bottom: 0;
  }
  @media screen and (min-width: 1280px) {

  }

`;

export const Text = styled.p`
  color: #000;
  font-family: Manrope;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: 0.56px;
  font-family: "Manrope", sans-serif;

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media screen and (min-width: 768px) {
    line-height: 1.28;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }

  @media screen and (min-width: 1280px) {
    font-size: 16px;
    line-height: 1.37;
    letter-spacing: 0.64px;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  }
`;

export const DeleteIcon = styled.button`
  display: block;
  position: absolute;
  right: 7%;
  cursor: pointer;

  @media screen and (min-width: 768px) {
    top: 8%;
    right: 2%;
  }

  &:hover {
    background: #ffc107;
  }
`;

export const ContainerUser = styled.div`
  @media screen and (min-width: 768px) {
  }

  @media screen and (min-width: 1280px) {
    display: flex;
  }
`;

export const ImageFon = styled.img`
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 20px;
  object-fit: cover;
`;


export const ButtonTrash = styled.button`
display: flex;
align-items: center;
justify-content: center;
outline: transparent;
width: 40px;
height: 40px;
margin: 0;
padding: 0;
border: none;
border-radius: 50%;
line-height: 0;
background-color: #CCE4FB;
transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
position: absolute;
top: 272px;
right: 16px;

@media screen and (min-width: 768px) {
  top: 20px;
  right: 20px;
}

@medis screen and (min-width: 1280px) {
  top: 18px;
}

`