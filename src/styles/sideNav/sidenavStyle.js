import styled from "styled-components";
import variables from "../common/variables";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const SideNav = styled(motion.nav)`
  display: none;
  position: fixed;
  top: 0;
  /* left: 0; */
  right: 0;
  bottom: 0;
  width: 100vw;
  z-index: 101;
  @media screen and (max-width: ${variables.breakpointPhone}) {
    display: block;
    pointer-events: none;
  }
`;

export const SideNavBtn = styled.button`
  outline: none;
  border: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  cursor: pointer;
  position: absolute;
  top: 16px;
  right: calc(10vw - 24px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: transparent;
  pointer-events: fill;
`;
export const SideNavLogo = styled(Link)`
  position: absolute;
  top: 18px;
  left: 18px;
  padding: 0.5rem;
  pointer-events: fill;

  img {
    width: 40px;
    filter: brightness(0.6);
  }
`;
export const SideBg = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  background: #fff;
  /* background: rgba(255, 255, 255, 0.95); */
`;

export const SideNavList = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-wrap: wrap;
  place-content: center start;
  width: 100%;
  padding: 2rem 0;
  margin-top: 10%;
  &.preventClick {
    pointer-events: none;
    > div > a {
      pointer-events: none;
    }
    > div > button {
      pointer-events: none;
    }
  }
`;

export const SideNavListItem = styled(motion.div)`
  padding: 1rem;
  /* width: 33%; */
  width: 100%;
  font-weight: 500;
  text-align: center;

  &.top {
    border-bottom: solid 1px ${variables.grey};
  }
  &.bottom {
    border-top: solid 1px ${variables.grey};
  }
  &.folder {
    pointer-events: fill;
    color: ${variables.primary};
    cursor: pointer;
  }
`;
export const SideNavLink = styled(Link)`
  color: ${variables.primary};
  text-decoration: none;
  padding: 0 0.5rem;
  font-size: 1.25rem;
  font-weight: 300;
  cursor: pointer;
  pointer-events: fill;

  svg {
    margin-right: 0.5rem;
    vertical-align: bottom;
  }
  &.all-link {
    padding: 0.25rem;
    font-size: 1.15rem;
    span {
      padding: 0.25rem;
    }
    svg {
      margin-right: 0;
    }
  }
  &.folder-link {
    font-size: 1rem;
    border-right: solid 1px ${variables.grey};
    display: inline-block;
    padding: 0.25rem 0.5rem;
    :last-child {
      border-right: none;
    }
  }
`;

export const SideNavSecond = styled.div`
  display: ${({ isOpen }) => (isOpen ? `block` : `none`)};
  overflow: hidden;
  cursor: pointer;
  pointer-events: fill;
  transition: 0.3s;
`;

export const SideNavSecondTitle = styled.div`
  display: flex;
  padding-left: 1rem;
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ isOpen }) => (isOpen ? `1rem` : `0`)};
  p {
    border-bottom: ${({ isOpen }) =>
      isOpen ? `solid 1px ${variables.primary}` : `none`};

    padding: 0.25rem;
    font-size: 1.15rem;
    font-weight: 300;
  }
`;
