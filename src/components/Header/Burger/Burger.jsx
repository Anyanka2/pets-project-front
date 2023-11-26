import React from 'react';
import { MobileMenuContainer, MobileMenuItem } from './Burger.styled';
import { CloseIcon } from '../Header.styled';


const MobileMenu = ({ toggleMenu }) => {
  return (
    <MobileMenuContainer>
    <CloseIcon onClick={toggleMenu}>X</CloseIcon>
      <MobileMenuItem to="news" onClick={toggleMenu}>
        News
      </MobileMenuItem>
      <MobileMenuItem to="notices" onClick={toggleMenu}>
        Find Pet
      </MobileMenuItem>
      <MobileMenuItem to="friends" onClick={toggleMenu}>
        Our Friends
      </MobileMenuItem>
    </MobileMenuContainer>
  );
};

export default MobileMenu;

