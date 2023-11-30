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
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.shadowDefault};
  padding: 20px;
  border-radius: 40px;
  position: relative;
  display: flex;
  flex-direction: column;

  &:last-child {
    margin-bottom: 42px;
  }

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: flex-start;
    gap: 20px;
    flex-direction: row;

    @media screen and (min-width: 1280px) {
      width: 821px;
    }
  }
`;

export const TitlePet = styled.h3`
  font-family: ${theme.fonts.manrope.medium};
  color: ${theme.colors.black};
  font-size: 20px;
  font-weight: ${theme.fontWeights.medium};
  line-height: 1.37;
  margin-bottom: 31px;
  margin-top: 46px;

  @media screen and (min-width: 768px) {
    margin-bottom: 22px;
    font-size: 28px;
    margin-top: 40px;
  }

  @media screen and (min-width: 1280px) {
    margin-bottom: 6px;
    margin-top: 60px;
  }
`;

// export const TitleWithoutPet = styled.h2`
//   text-align: center;
//   color: #111111;
//   font-size: 20px;
//   font-weight: 500;
//   line-height: 1.36;
//   margin-bottom: 31px;
//   font-family: ${theme.fonts.manrope.medium};
//   @media screen and (min-width: 768px) {
//     margin-bottom: 22px;
//     font-size: 28px;
//   }

//   @media screen and (min-width: 1280px) {
//     margin-bottom: 0;
//   }
// `;

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
  color: ${theme.colors.black};
  font-family: ${theme.fonts.manrope.regular};
  font-weight: ${theme.fontWeights.regular};
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
      margin-bottom: 16px;
    }
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
  position: absolute;
  //width: 100%;
  top: 0px;
  left: 0px;
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
  background: transparent;
  position: absolute;
  top: 266px;
  right: 13px;

  @media screen and (min-width: 768px) {
    top: 20px;
    right: 20px;
  }
  &:hover {
    transition: ${theme.transitions.transitionRegular};
    background: ${theme.colors.lightBlue};
  }

  @media screen and (min-width: 1280px) {
    top: 18px;
  }
`;
export const TrashIconPet = styled.svg``;

export const StyledDiv = styled.div`
  width: 330px;
  height: 330px;
  background: #ffc107a9;
  border-radius: 50%;
  position: relative;
  //width: 100%;
  top: 40px;
  left: 200px;
`;
