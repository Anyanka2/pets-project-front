import React from 'react';
import Navigation from '../Navigation/Navigation';
import { HeaderContainer,LogoLink, ButtonsContainer, Image, ImgLogin, LinkReg, LinkLogin} from './Header.styled';
import svg from '../../assets/icons/logo.svg';
import pawprint from '../../assets/icons/pawprint.svg';
import { Container } from "../../shared/components/Container";

const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <LogoLink to='/main'>
        <Image src ={`${svg}`}/>
        </LogoLink>
        <Navigation/>
        <ButtonsContainer>
            <LinkLogin to='login'>
              LOG IN
              <ImgLogin src = {`${pawprint}`} />
            </LinkLogin>
            <LinkReg to='register'>Registration</LinkReg>
        </ButtonsContainer>
        </HeaderContainer>
    </Container>
  );
};

export default Header ;