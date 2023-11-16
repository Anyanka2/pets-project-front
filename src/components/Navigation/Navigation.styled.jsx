import styled from 'styled-components';


export const NavigationContainer = styled.nav`
  display: flex;
`;

export const NavLink = styled.a`
  margin-right: 20px;
  color: #fff;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;