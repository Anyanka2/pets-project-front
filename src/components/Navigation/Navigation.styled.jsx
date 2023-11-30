import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const NavigationContainer = styled.nav`
  min-width: 320px;
  display: none;
  
  @media only screen and (min-width: 768px) {
    max-width: 768px;
  }
  @media only screen and (min-width: 1280px) {
    max-width: 1280px;
    display: flex;
    gap: 40px;
  }
`;



export const StylesLink = styled(NavLink)`
  color: #111;
  text-decoration: none;
  font-size: 20px;
  font-weight: 500;

  &:hover {
    color: ${({theme}) => theme.colors.yellow};
  }
`;