import styled from "styled-components";
import variables from "../common/variables";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Nav = styled(motion.nav)`
  background: ${({ isScrollDown }) =>
    isScrollDown ? `${variables.inverse}` : `transparent`};
  color: ${({ path }) =>
    path == `/` ? `${variables.inverse}` : `${variables.primary}`};
  /* background: rgba(255, 255, 255, 0.5); */
  transition: all 0.5s ease;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem ${variables.gutter};
  z-index: 100;
  position: fixed;
  top: 0;
  @media screen and (max-width: ${variables.breakpointPhone}) {
    display: none;
  }
`;
export const LogoIcon = styled.div`
  font-size: 1.25rem;
`;

export const NavContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: ${({ path }) =>
    path == `/` ? `${variables.inverse}` : `${variables.primary}`};
  text-decoration: none;
  /* font-family: "Noto Serif TC", serif; */
  padding: 0 0.5rem;
  font-size: 1rem;
  letter-spacing: 1px;
  font-weight: 300;
  cursor: pointer;
`;

export const NavBtn = styled.div`
  display: flex;
  width: 120px;
  letter-spacing: 1px;
  font-weight: 300;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  svg {
    pointer-events: none;
  }

  @media screen and (max-width: ${variables.breakpointPhone}) {
    display: none;
  }
`;
