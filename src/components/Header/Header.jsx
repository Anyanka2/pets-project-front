import React from 'react';
import Navigation from '../Navigation/Navigation';
import { Logo, ButtonsContainer,Button, Image, ImgLogin} from './Header.styled';
import svg from '../../icons/logo.svg';
import pawprint from '../../icons/pawprint.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Container>
        <Logo>
        <Image src ={`${svg}`}/>
        </Logo>
        <Navigation/>
        <ButtonsContainer>
            <Link to='login'>
              <Button>
                Log IN
                <ImgLogin src = {`${pawprint}`} />
              </Button>
            </Link>
            <Link to='register'>
            <Button>
            Registration
            </Button>
            </Link>
        </ButtonsContainer>
    </Container>
  );
};

export default Header ;