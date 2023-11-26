import styled from "styled-components";
import { theme } from "../../shared/styles/theme";

export const ContainerScroll = styled.div`
  background: radial-gradient(circle at 50% 50%, #419ef1 30%, #9bd0ff 50%);
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: rotate(90deg);
`;
export const IconContainer = styled.div`
  height: 42px;

  fill: ${theme.colors.bgColorPage};

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

  transition: transform 0.25s linear, stroke 0.25s linear;
  animation: pulse-animation 8s infinite;

  &:hover,
  :focus {
    animation: none;
    cursor: pointer;
  }
`;
