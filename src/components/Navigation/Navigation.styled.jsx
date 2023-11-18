import styled from 'styled-components';


export const NavigationContainer = styled.nav`
  display: flex;
  margin-right: 210px;
  gap: 40px;
`;

export const NavLink = styled.a`
  margin-right: 20px;
  color: #111;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;

  &:hover {
    color: #FFC107;
  }
`;