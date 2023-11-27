import styled from 'styled-components';

export const LogInPage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  height: 100vh;
 
  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }
  `;

  export const LoginFormWrapper = styled.div`
  padding: 40px 12px;
  width: 280px;
  height: fit-content;
  background: #ffffff;
  box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
  border-radius: 40px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
  padding: 60px 75px;
  width: 608px;

    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 20px;
  }
`;