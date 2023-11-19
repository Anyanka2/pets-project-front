import React from 'react';
import Navigation from '../Navigation/Navigation';
import {HeaderContainer, Logo, ButtonsContainer, Link, Image, ImgLogin} from './Header.styled';
import svg from '../../icons/logo.svg';
import pawprint from '../../icons/pawprint.svg';

const Header = () => {
  return (
    <HeaderContainer>
        <Logo>
        <Image src ={`${svg}`}/>
        </Logo>
        <Navigation/>
        <ButtonsContainer>
            <Link to='login'>
              LOG IN
              <ImgLogin src = {`${pawprint}`} />
            </Link>
            <Link to='register'>Registration</Link>
        </ButtonsContainer>
    </HeaderContainer>
  );
};

export default Header ;