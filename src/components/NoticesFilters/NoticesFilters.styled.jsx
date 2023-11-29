import styled from 'styled-components';

const FilterWrapper = styled.div`
  position: relative;
  z-index: 2;

  margin-bottom: auto;

  display: flex;
  flex-direction: column-reverse;
  align-items: flex-end;

  gap: 5px;

  @media screen and (min-width: 1280px) {
    flex-direction: row;
    align-items: center;
    gap: 17px;
  }
`;

const CheckedContainer = styled.div`
    z-index: 5;
    
    @media screen and (min-width: 768px) {
        position: absolute;
        top: 52px;
        left: 125px;
        display: flex;
        flex-direction: row-reverse;

        width: 170px;
    }

    @media screen and (min-width: 1280px) {
        position: static;
        display: flex;

        width: 100%;
    }
`;

const Btn = styled.button`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 40px;
  height: 40px;
  padding: 8px;

  background-color: ${({ theme, isOpen }) =>
    isOpen ? 'transparent' : theme.colors.lightBlue};
  border: none;
  border-radius: 50%;

  transition: color ${({ theme }) => theme.transitions.transitionRegular},
    border-color ${({ theme }) => theme.transitions.transitionRegular},
    background-color ${({ theme }) => theme.transitions.transitionRegular};

  &:hover,
  &:focus {
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
    opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};

    z-index: -1;

    transition: opacity ${({ theme }) => theme.transitions.transitionRegular};
  }

  &:hover::before,
  &:focus::before {
    opacity: 1;
  }

  & svg {
    stroke: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.white : theme.colors.blueLink};

    transition: stroke ${({ theme }) => theme.transitions.transitionRegular};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${({ theme }) => theme.colors.white};
  }

  @media screen and (min-width: 768px) {
    gap: 8px;
    min-width: 152px;

    font-size: 16px;
    font-weight: 700;
    color: ${({ theme, isOpen }) =>
      isOpen ? theme.colors.white : theme.colors.blueLink};

    background-color: transparent;
    border-width: ${({ filled }) => (filled ? 0 : '2px')};
    border-color: ${({ theme, isOpen }) =>
      isOpen ? 'transparent' : theme.colors.blueLink};
    border-style: solid;
    border-radius: 40px;
  }
`;

const Filters = styled.div`
  position: absolute;
  top: 40px;
  right: 0;

  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 152px;
  padding: 8px;

  background-color: #fff;
  border-radius: 20px;

  ${({ isOpen }) => isOpen && 'pointer-events: none'}

  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  will-change: opacity, max-height;
  overflow: hidden;

  transition: opacity ${({ isOpen }) => (isOpen ? '200ms' : '550ms')}
      ${({ theme }) => theme.transitions.transitionRegular},
    height ${({ theme }) => theme.transitions.transitionRegular};
`;

const FiltersText = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.blueLink};
  text-align: left;
`;

export { FilterWrapper, CheckedContainer, Btn, Filters, FiltersText };