import styled from "@emotion/styled";
import { theme } from "../../shared/styles/theme.jsx";

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
`;

export const Item = styled.li`
  text-align: center;
  border-radius: 40px;
  padding: 16px;
  box-shadow: ${theme.shadows.shadowDefault};
  background-color: ${theme.colors.white};
  width: 395px;
  height: 287px;
  margin-left: auto;
  margin-right: auto;
`;

export const Name = styled.a`
  font-size: 24px;
  font-weight: 700;
  color: ${theme.colors.blueLink};
  text-decoration: none;
`;

export const ImgThumb = styled.div`
  width: 146px;
`;

export const Image = styled.img`
  max-width: 100%;
`;

export const Contacts = styled.p`
  font-size: 12px;
  font-weight: 500;
  color: ${theme.colors.black};
  margin-top: 12px;
`;

export const ContactsLink = styled.a`
  text-decoration: none;
  font-size: 12px;
  font-weight: 500;
  color: ${theme.colors.black};
  transition: color: ${theme.transitions.transitionRegular};

  :hover {
    color: color: ${theme.colors.blueLink};
  }
`;
