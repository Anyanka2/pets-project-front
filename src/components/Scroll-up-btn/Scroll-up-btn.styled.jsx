import styled from 'styled-components';

export const ContainerScroll = styled.div`
  background: radial-gradient(183.6% 183.01% at 59.76% -23.42%,#4f2ee8 18.03%,#ffffff 100%);
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`;
export const IconContainer = styled.div`
  height: 42px;

  fill: white;
  
  @keyframes pulse-animation {
  0% {
    transform: scale(0.9);
  }
  25% {
    transform: scale(1.1);
  }
  35% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  65% {
    transform: scale(0.9);
  }
  75% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(0.9);
  }
}

transition: transform .25s linear,stroke .25s linear;
animation: pulse-animation 8s infinite;

&:hover, :focus {
    fill: aquamarine;
    animation: none;
    cursor: pointer;
  }
`;