import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MobileMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white; 
  z-index: 1000; 
  width: 100%;
  height: 100%;

  @media screen and (min-width: 1280px){
    display:none;
  }
`;


export const MobileMenuItem = styled(Link)`
`;