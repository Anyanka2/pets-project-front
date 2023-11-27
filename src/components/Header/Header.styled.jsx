import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {theme} from '../../shared/styles/theme';


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
  z-index:1001;
  
  @media screen and (min-width: 1280px){
    margin-right: 159px;
  }
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

&:hover  {
    background: ${({theme}) => theme.colors.yellow};
    color : ${theme.colors.white};
    border:none;
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

export const BurgerButton = styled.button`
margin-left: 140px;

&:hover svg {
  fill: black;
}

@media screen and (min-width: 769px){
  display: none;
}
 
`;

export const CloseIcon = styled.div`
position: absolute;
top: 20px;
right: 20px;
z-index: 1001;
`

