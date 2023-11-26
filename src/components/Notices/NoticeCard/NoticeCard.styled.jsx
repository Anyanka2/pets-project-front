import { styled } from "styled-components";
import { theme } from "../../../shared/styles/theme";

export const List = styled.ul`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    column-gap: 32px;
    row-gap: 24px;
  }

  & > li > p {
    flex-grow: 1;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding-bottom: 24px;
  border-radius: 0 0 40px 40px;
  box-shadow: ${theme.shadows.shadowDefault};
  background-color: ${theme.colors.white};

  @media screen and (min-width: 768px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 288px;
    height: 456px;
  }

  transition: transform ${theme.transitions.transitionRegular};

  &:hover {
    transform: scale(1.02);
    transition: transform ${theme.transitions.transitionRegular};
    box-shadow: ${theme.shadows.shadowHover};
  }
`;

export const ContainerPetInfo = styled.div`
  position: relative;
  display: block;
  height: 288px;
  width: 100%;
`;

export const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const ContainerPetStatus = styled.div`
  position: absolute;
  top: 12px;
  left: 0;
  right: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const TextStatus = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 126px;
  height: 32px;
  border-radius: 0 16px 16px 0;
  font-size: 14px;
  font-family: ${theme.fonts.manrope.medium};
  background-color: ${theme.colors.lightBlue};
  color: ${theme.colors.black};
`;

export const ContainerButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Button = styled.button`
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
  background-color: ${theme.colors.lightBlue};
  transition: transform ${theme.transitions.transitionRegular};

  &:hover {
    transform: scale(1.2);
    transition: transform ${theme.transitions.transitionRegular};
  }
`;

export const ListPetInfo = styled.ul`
  position: absolute;
  bottom: 12px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  gap: 12px;
  padding: 0;

  @media screen and (min-width: 768px) {
    gap: 24px;
  }

  @media screen and (min-width: 1280px) {
    gap: 12px;
  }
`;

export const ItemPetInfo = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 80px;
  height: 28px;
  padding: 5px 5px;
  border-radius: 16px;
  background-color: ${theme.colors.lightBlue};
  color: ${theme.colors.black};
  stroke: ${theme.colors.blueLink};
  cursor: pointer;
  transition: ${theme.transitions.transitionRegular};
`;

export const SpanPetText = styled.span`
  font-family: ${theme.fonts.manrope.semiBold};
  font-size: 12px;
  text-align: center;
  letter-spacing: 0.48px;
`;

export const TextPetName = styled.p`
  display: flex;
  padding: 20px;
  font-family: ${theme.fonts.manrope.bold};
  font-size: 24px;
  line-height: 33px;
  word-break: break-word;
`;

export const LearnMoreBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: inherit;
  color: ${theme.colors.blueLink};
  width: 248px;
  height: 38px;
  padding: 8px 28px;
  border-radius: 40px;
  border: 2px solid ${theme.colors.blueLink};
  background: transparent;
  margin: 0 auto;

  &:hover,
  &:focus {
    background: ${theme.colors.blueGradient};
    color: ${theme.colors.white};
  }
`;
