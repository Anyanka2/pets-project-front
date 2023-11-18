import styled from 'styled-components';

// Стилизация Header
export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 16px;
  color: #111;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-right: 159px;
`;

export const Image = styled.img`
  width: 162px;
  height: 28px;
`;


export const ButtonsContainer = styled.div`
  display: flex;
  gap: 10px;

 
`;

export const Button = styled.button`
  padding: 8px 20px 8px 20px;
  border: 2px solid #FFC107;
  cursor: pointer;
  color: #FFC107;
  width: 165px;
  border-radius: 40px;
  background-color: #fff;

  &:hover {
    background-color: #FFC107;
    color: #fff;
  }
`;
