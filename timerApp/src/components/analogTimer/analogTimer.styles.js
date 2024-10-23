import styled from "styled-components";
import { motion } from "framer-motion";

export const AnalogTimerStyled = styled.div`
  height: 278px;
  width: 278px;
  margin-top: 7rem;
  margin-bottom: 2rem;

  position: relative;
`;

export const MinutesCircleStyled = styled.img`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const BigPointerStyled = styled(motion.img)`
  position: absolute;
  left: 50%;
  width: 4px; // Adjust width
  height: 50%; // Adjust based on your design
  transform: translate(-50%, -100%);
  transform-origin: bottom center;
`;

export const SmallPointerStyled = styled(motion.img).attrs(() => ({
  animate: {
    rotate: 360,
    transition: {
      duration: 60, // Time to complete a full minute
      ease: "linear",
      repeat: Infinity, // Continuously rotate
      repeatType: "loop", // Loop the rotation
    },
  },
}))`
  position: absolute;
  left: 50%;
  width: 2px; // Adjust width
  height: 50%; // Adjust height
  transform: translate(-50%, -100%);
  transform-origin: bottom center;
`;

export const BlackCircleStyled = styled.img`
  position: absolute;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  width: 16px;
  height: 16px;
  transform: translate(-36%, -50%); // Center the black circle
`;

export const GrayCircleStyled = styled.img`
  position: absolute;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  width: 10px;
  height: 10px;
  transform: translate(-30%, -50%); // Center the gray circle
`;
