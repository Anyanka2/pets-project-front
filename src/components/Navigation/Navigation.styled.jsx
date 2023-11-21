import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const NavigationContainer = styled.nav`
  display: flex;
  margin-right: 210px;
  gap: 40px;
`;

export const StylesLink = styled(NavLink)`
  color: #111;
  text-decoration: none;
  font-size: 20px;

  &:hover {
    color: #FFC107;
  }
`;