import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const navMenuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05, // Stagger each child (NavLink)
      duration: 0.001, // Duration for each child animation
    },
  },
};

export const navLinkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const NavMenuContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(55, 55, 55, 0.9); /* Dark background */
  z-index: 999; /* Ensure it stays on top */
  padding-bottom: 5rem;
  overflow: hidden;
`;

export const NavLink = styled(motion.create(Link))`
  color: white;
  font-size: 2rem;
  margin: 1rem 0;
  text-decoration: none;
  background-color: black;
  border-radius: 10px;
  padding: 1px 7px;
  text-align: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const NavIconStyled = styled.img`
  height: 100%; /* Adjust to fit the button */
  width: 100%; /* Adjust to fit the button */
`;

export const NavButton = styled.button`
  position: absolute;
  z-index: 1000;
  left: 2rem;
  top: 20px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;

  /* Ensure the button has the same size as the icon */
  height: 32px;
  width: 32px;

  &:focus {
    outline: none; /* Optional: Remove focus outline */
  }
`;
