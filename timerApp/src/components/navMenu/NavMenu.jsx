import React, { useState } from "react";
import navIcon from "../../assets/navicon.png";
import {
  NavMenuContainer,
  NavLink,
  NavButton,
  NavIconStyled,
  navLinkVariants,
  navMenuVariants,
} from "./navMenu.styles";
import { motion } from "framer-motion";

const NavMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavButtonClick = () => {
    setMenuOpen((prev) => !prev); // Toggle menu open/close
  };

  return (
    <>
      <NavButton onClick={handleNavButtonClick}>
        <NavIconStyled src={navIcon} alt="Nav icon" />
      </NavButton>

      {menuOpen && (
        <NavMenuContainer
          as={motion.div}
          variants={navMenuVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          <NavLink variants={navLinkVariants} to="/">
            Home
          </NavLink>
          <NavLink variants={navLinkVariants} to="/SetTimer">
            Set Timer
          </NavLink>
          <NavLink variants={navLinkVariants} to="/analogTimer">
            Analog Timer
          </NavLink>
          <NavLink variants={navLinkVariants} to="/digitalTimer">
            Digital Timer
          </NavLink>
        </NavMenuContainer>
      )}
    </>
  );
};

export default NavMenu;
