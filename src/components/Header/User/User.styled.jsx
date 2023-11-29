import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const UserIconLink = styled(Link) `
  display: block;

@media screen and (min-width: 768px){
   margin-left: auto;
}

@media screen and (min-width: 1280px){
    display: block;
  }
`;