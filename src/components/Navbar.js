import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  NavBtn,
  NavContent,
  LogoIcon,
  NavMenu,
} from "../styles/navbar/nav";
import { Submenu } from "./index";
import { GiTreeBranch } from "react-icons/gi";
import {
  BiCaretDown,
  BiCaretUp,
  BiCaretLeft,
  BiCaretRight,
} from "react-icons/bi";

function Navbar({ path }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [submenuPos, setSubmenuPos] = useState({});
  const [isScrollDown, setIsScrolldown] = useState(false);

  let listener = null;
  const [scrollState, setScrollState] = useState("top");

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 100) {
        setIsScrolldown(true);
      } else {
        setIsScrolldown(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [scrollState]);

  const handleSubmenuOpen = (e) => {
    e.preventDefault();
    const parent = e.target.getBoundingClientRect();
    const posX = (parent.left + parent.right) / 2 - parent.width / 2 + 10;
    const posY = parent.bottom + 8;
    setSubmenuPos({ posX, posY });
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <Nav isScrollDown={isScrollDown} path={path}>
      <NavLink path={path} to="/">
        <LogoIcon>
          <GiTreeBranch />
        </LogoIcon>
      </NavLink>
      <NavContent>
        <NavMenu>
          <NavLink path={path} to="/">
            搜尋景點
          </NavLink>
          <NavBtn onClick={handleSubmenuOpen}>
            全台景點
            {isSubmenuOpen ? <BiCaretUp /> : <BiCaretDown />}
          </NavBtn>
          <NavLink path={path} to="/about">
            網站相關
          </NavLink>
        </NavMenu>
      </NavContent>

      {/* {isSubmenuOpen ? ( */}
      <Submenu
        submenuPos={submenuPos}
        setIsSubmenuOpen={setIsSubmenuOpen}
        isSubmenuOpen={isSubmenuOpen}
      />
      {/* ) : null} */}
    </Nav>
  );
}

export default Navbar;
