import styled from 'styled-components';

const Menu = styled.div`
  padding-right: 22px;

  background-color: ${({ theme }) => theme.colors.lightBlue};
  border-radius: 20px;
`;

const MenuBtn = styled.button`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;

  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.blueLink};

  background-color: transparent;
  border: none;
  border-radius: 20px;

  & svg {
    stroke: ${({ theme }) => theme.colors.blueLink};
  }
`;

const AgeSubMenu = styled.form`
  display: flex;
  flex-direction: column;
  gap: 8px;

  width: 100%;
  height: ${({ isShown }) => (isShown ? '104px' : 0)};
  padding-top: ${({ isShown }) => (isShown ? '4px' : 0)};
  padding-left: 38px;

  overflow: hidden;

  transition: height 300ms ${({ theme }) => theme.transitions.transitionRegular};
`;

const GenderSubMenu = styled(AgeSubMenu)`
  height: ${({ isShown }) => (isShown ? '75px' : 0)};
`;

const ItemText = styled.label`
  position: relative;

  display: flex;
  align-items: center;

  width: 100%;
  min-height: 24px;
  padding-left: 36px;

  font-size: 12px;
  color: ${({ theme }) => theme.colors.blueLink};
`;

const Icon = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & svg {
    stroke: ${({ theme }) => theme.colors.blueLink};
  }
`;

const CheckedIcon = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  & svg {
    stroke: ${({ theme }) => theme.colors.blueLink};
  }
`;

const ItemCheckbox = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;

  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;
`;

const KotikiBtn = styled(MenuBtn)`
  min-height: 32px;
  padding-left: 10px;

  & svg {
    stroke: none;
    fill: ${({ theme }) => theme.colors.blueLink};
  }
`;

export {
  Menu,
  MenuBtn,
  AgeSubMenu,
  GenderSubMenu,
  Icon,
  CheckedIcon,
  ItemText,
  ItemCheckbox,
  KotikiBtn,
};