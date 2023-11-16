import React from 'react';
import Navigation from '../Navigation/Navigation';
import {HeaderContainer, Logo, ButtonsContainer, Button} from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
        <Logo>Your pets</Logo>
        <Navigation/>
        <ButtonsContainer>
            <Button>LOG IN</Button>
            <Button>Registration</Button>
        </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header ;