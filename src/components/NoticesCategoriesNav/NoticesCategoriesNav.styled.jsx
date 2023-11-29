import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  width: 195px;

  @media screen and (min-width: 768px) {
    gap: 12px;
    width: 320px;
  }

  @media screen and (min-width: 1280px) {
    width: 100%;
  }
`;

const ListItem = styled.li`
    padding-top: 6px;
    padding-bottom: 6px;
`
const Btn = styled(NavLink)`
  position: relative;

  font-size: 14px;
  font-weight: 500;
  line-height: 1.36;

  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;

  color: ${({ theme }) => theme.colors.blueLink};

  background-color: ${({ theme }) => theme.colors.lightBlue};
  border: none;
  border-radius: 40px;

  transition: color ${({ theme }) => theme.transitions.transitionRegular},
    background-color ${({ theme }) => theme.transitions.transitionRegular};

  &.active {
    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ theme }) => theme.colors.blueLink};
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;

    width: 100%;
    height: 100%;

    background: ${({ theme }) => theme.colors.blueGradient};
    border-radius: 40px;
    opacity: 0;

    z-index: -1;

    transition: opacity 300ms ${({ theme }) => theme.transitions.transitionRegular};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.white};

    background-color: ${({ theme }) => theme.colors.blueLink};
  }
`;

export { List, ListItem, Btn };