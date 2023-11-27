import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {theme} from '../../../shared/styles/theme'

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  z-index: 1000;
  transform: translateX(${({ open }) => (open ? "0" : "100%")});
  transition: transform 0.3s ease-in-out;
  gap:20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 768px){
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background-color: white;
    padding: 20px;
    border-radius: 10px;
    z-index: 1000;
    transform: translateX(${({ open }) => (open ? "0" : "100%")});
    transition: transform 0.3s ease-in-out;
  }
`;


export const MobileMenuItem = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  font-size: 32px;
  font-weight: 500;
  line-height: 1.36;
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.yellow}
  } 

`;

export const ButtonsBurger = styled.button`
min-width: 320px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 12px;
`

export const LinkBurgerLogin = styled(Link)`
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

/* &:hover {
  background: ${({theme}) => theme.colors.yellow};
  color : ${theme.colors.white};
  border:none;
}
&:hover svg {
fill:${theme.colors.white};
} */
`

export const LinkBurgerReg = styled(Link)`
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

/* &:hover {
  background: ${({theme}) => theme.colors.yellow};
  color : ${theme.colors.white};
  border:none;
} */
`