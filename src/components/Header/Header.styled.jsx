import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Стилизация Header
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 16px;
  justify-content: space-between;
`;

export const LogoLink = styled(Link)`
  margin-right: 159px;
`;

export const Image = styled.img`
  width: 162px;
  height: 28px;
`;


export const ImgLogin = styled.img`
  width: 24px;
  height: 24px;
  padding:0;
  margin: 0;
`;


export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;

 
`;

export const LinkLogin = styled(Link)`
  padding: 8px 20px 8px 20px;
  border: 2px solid ${({theme}) => theme.colors.yellow};
  cursor: pointer;
  color: ${({theme}) => theme.colors.white};
  width: 165px;
  border-radius: 40px;
  background-color: ${({theme}) => theme.colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1.5;
  gap: 8px;

&:hover {
    background: ${({theme}) => theme.colors.orangeGradient};
    border:none;
    letter-spacing: 1px;
    box-shadow: ${({theme}) => theme.shadows.shadowHover};
    transition: all 0.4s ease 0s;
  }
`;


export const LinkReg = styled(Link)`
padding: 8px 20px 8px 20px;
border: 2px solid ${({theme}) => theme.colors.yellow};
cursor: pointer;
color: ${({theme}) => theme.colors.yellow};
width: 165px;
border-radius: 40px;
background-color: ${({theme}) => theme.colors.white};
display: flex;
align-items: center;
justify-content: center;
font-size: 16px;
line-height: 1.5;
gap: 8px;

&:hover {
  background: ${({theme}) => theme.colors.orangeGradient};
  color: ${({theme}) => theme.colors.white};
  border:none;
  letter-spacing: 1px;
  box-shadow: ${({theme}) => theme.shadows.shadowHover};
  transition: all 0.4s ease 0s;
}
`;