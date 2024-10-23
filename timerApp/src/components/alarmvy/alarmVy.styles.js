import styled from "styled-components";
import { Wrapper } from "../setTimer/setTimer.styles";
import { motion } from "framer-motion";

export const CustomWrapper = styled(Wrapper)`
  background-color: black;
  justify-content: space-evenly;
  height: 100vh;
  width: 100vw;
  max-width: none;
  padding: 0;
`;

export const AlertStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 36px;
    color: white;
    font-weight: 700;
  }
`;

// Define the AnimatedImg with keyframes using the keyframes utility
export const AnimatedImg = styled(motion.img).attrs({
  initial: { scale: 1, rotate: 0 },
  animate: {
    scale: [1, 1.2, 1.2, 1, 1], // Keyframes for scaling
    rotate: [0, 20, -15, 10, -10, 10, 0, 0, 0], // Keyframes for rotation
  },
  transition: {
    duration: 1, // Duration for the animation
    repeat: Infinity, // Repeat infinitely
    ease: "easeInOut", // Easing function
  },
})`
  height: 85px;
  width: 85px;
`;

export const SetNewTimerBtnStyled = styled.button`
  background-color: inherit;
  color: white;
  border: 1px solid white;
  border-radius: 5px;
  padding: 0.6rem;
  font-size: 1rem;
  opacity: 60%;
  justify-self: flex-end;
`;
