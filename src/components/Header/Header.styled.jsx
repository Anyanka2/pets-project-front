import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {theme} from '../../shared/styles/theme';

// Стилизация Header
export const HeaderContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

@media screen and (min-width: 768px){

}

@media screen and (min-width: 1280px){
  display: flex;
  align-items: center;
  justify-content: space-between;
}

`;

export const LogoLink = styled(Link)`
  margin-right: 159px;
`;

export const Image = styled.img`
  width: 116px;
  height: 20px;
  max-width: none;

@media screen and (min-width: 768px) {
  width: 162px;
  height: 28px;
}

`;


export const CustomSvg = styled.svg`
  fill: ${({theme}) => theme.colors.yellow};
  width: 24px;
  height: 24px;
`;


export const ButtonsContainer = styled.div`
  min-width: 320px;
  display: none;

@media screen and (min-width: 768px){
  display: flex;
  gap: 20px;
}


 
`;

export const LinkLogin = styled(Link)`
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
    background: ${({theme}) => theme.colors.yellow};
    color : ${theme.colors.white};
    border:none;
  /*   letter-spacing: 1px;
    box-shadow: ${({theme}) => theme.shadows.shadowHover};
    transition: all 0.4s ease 0s; */
  }
&:hover svg {
  fill:${theme.colors.white};
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
  background: ${({theme}) => theme.colors.yellow};
  color : ${theme.colors.white};
  border:none;
}
`;