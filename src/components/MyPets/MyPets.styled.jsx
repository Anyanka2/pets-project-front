import styled from "styled-components";
import { theme } from "../../shared/styles/theme";

export const AllCardsPet = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media screen and (min-width: 768px) {
  }
`;

export const ContainerItem = styled.div`
  background-color: white;
  box-shadow: ${theme.shadows.shadowDefault};
  padding: 20px;
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 20px;
  }

  @media screen and (min-width: 1280px) {
    width: 821px;
  }
`;

export const TitlePet = styled.h2`
  color: #111111;
  font-size: 20px;
  font-weight: 500;
  line-height: 1.36;
  margin-bottom: 31px;

  @media screen and (min-width: 768px) {
    margin-bottom: 22px;
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
`;

export const Text = styled.p`
  color: #000;
  font-family: Manrope;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.57;
  letter-spacing: 0.56px;

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
      margin-bottom: 12px;
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
