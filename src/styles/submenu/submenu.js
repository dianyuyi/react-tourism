import styled from "styled-components";
import variables from "../common/variables";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const SubContainer = styled(motion.div)`
  position: absolute;
  display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
  opacity: ${({ pos }) => (pos ? `1` : `0`)};
  z-index: 99999;
  width: 100px;
  height: auto;
  text-align: center;
  left: ${({ pos }) => (pos ? `${pos.posX}px` : `0`)};
  top: ${({ pos }) => (pos ? `${pos.posY}px` : `0`)};
`;

export const SubFolderMenu = styled(motion.div)`
  padding: 0.35rem 0.5rem;
  /* margin-bottom: 1px; */
  /* border: solid 1px ${variables.grey}; */
  background: ${variables.inverse};
  box-shadow: inset 0px -1px 2px rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  color: ${variables.primary};
  position: relative;

  &:before {
    content: "";
    position: absolute;
    top: 6px;
    left: -10px;
    transition: 0.2s;
  }
  &.active {
    background: ${variables.darkGrey};
    color: ${variables.inverse};
    border: solid 1px ${variables.darkGrey};
    cursor: pointer;

    &:before {
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-right: 12px solid ${variables.darkGrey};
    }
  }
`;

export const SubFolderSec = styled(motion.div)`
  flex-wrap: wrap;
  display: ${({ isOpen }) => (isOpen ? `inline-flex` : `none`)};
  opacity: ${({ isOpen }) => (isOpen ? `1` : `0`)};
  position: absolute;
  left: -116px;
  top: ${({ areaPos }) => (areaPos ? `${areaPos}px` : `0px`)};
  width: 120px;
  justify-content: center;
`;

export const SubFolderSecItem = styled(Link)`
  position: relative;
  padding: 0.25rem 1em;
  /* margin: 1px; */
  color: ${variables.primary};
  background: ${variables.inverse};
  border: solid 1px ${variables.grey};
  /* border-right: dashed 1px ${variables.grey}; */
  border-bottom: none;
  transition: all 0.2s ease;
  :last-child {
    border-bottom: solid 1px ${variables.grey};
  }
  &:before {
    content: "";
    position: absolute;
    top: 9px;
    left: 6px;
  }

  &:hover {
    /* background: ${variables.darkGrey}; */
    color: ${variables.waterBlue};
    /* border-left: solid 1px ${variables.grey};
    border-right: solid 1px ${variables.grey};
    border-bottom: none; */

    &:before {
      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;
      border-left: 6px solid ${variables.waterBlue};
    }
  }
`;
