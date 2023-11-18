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


export const ImgLogin = styled.img`
  width: 24px;
  height: 24px;
  padding:0;
  margin: 0;
`;


export const ButtonsContainer = styled.div`
  display: flex;
  gap: 20px;

 
`;

export const Button = styled.button`
  padding: 8px 20px 8px 20px;
  border: 2px solid #FFC107;
  cursor: pointer;
  color: #fff;
  width: 165px;
  border-radius: 40px;
  background-color: #FFC107;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 1.5;
  gap: 8px;

  &:hover {
    background-color: #FFC107;
    color: #fff;
  }
`;
