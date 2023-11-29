import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;

  max-height: 32px;

  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;

  background-color: #fff;
  box-shadow: ${({ theme }) => theme.shadows.shadowDefault};
  border-radius: 20px;
`;

const Text = styled.p`
  font-size: 12px;
  font-weight: 400;

  color: ${({ theme }) => theme.colors.blueLink};
`;

const Btn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;

  & svg {
    stroke: ${({ theme }) => theme.colors.blueLink};
    transition: stroke ${({ theme }) => theme.transitions.transitionRegular};
  }

  &:hover svg,
  &:focus svg {
    stroke: ${({ theme }) => theme.colors.yellow};
  }
`;

export { Wrapper, Text, Btn };