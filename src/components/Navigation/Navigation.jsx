import React from 'react';
import { NavigationContainer, NavLink } from '../Navigation/Navigation.styled';

const Navigation = () => {
  return (
    <NavigationContainer>
      <NavLink href="#">News</NavLink>
      <NavLink href="#">Find Pet</NavLink>
      <NavLink href="#">Our Friends</NavLink>
    </NavigationContainer>
  );
};

export default Navigation;