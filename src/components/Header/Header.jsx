import React from 'react';
import Navigation from '../Navigation/Navigation';
import {HeaderContainer, Logo, ButtonsContainer, Button, Image} from './Header.styled';
import svg from '../../icon/logo.svg';
import pawprint from '../../icon/icon-pawprint.svg';

const Header = () => {
  return (
    <HeaderContainer>
        <Logo>
        <Image src ={`${svg}`}/>
        </Logo>
        <Navigation/>
        <ButtonsContainer>
            <Button>
              LOG IN
              <Image src = {`${pawprint}`} />
            </Button>
            <Button>Registration</Button>
        </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header ;