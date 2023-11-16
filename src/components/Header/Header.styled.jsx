import styled from 'styled-components';

// Стилизация Header
export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #333;
  color: #fff;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 8px, 20px, 8px, 20px
  background-color: #FFC107;
  color: #333;
  border: 2px;
  cursor: pointer;
  width: 165px;
`;
