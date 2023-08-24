import { Container } from "react-bootstrap";
import { styled } from "styled-components";

const BackgroundContainer = styled(Container)`
  background: linear-gradient(45deg, #00bcd4, #673ab7, #ffeb3b, #ff5722);
  background-size: 300% 300%;
  animation: gradientAnimation 5s infinite;

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

export default BackgroundContainer;
