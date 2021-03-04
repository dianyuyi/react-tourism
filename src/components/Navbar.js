import React, { useState } from "react";
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
import { BiCaretDown, BiCaretLeft, BiCaretRight } from "react-icons/bi";

import { citys } from "../data/citys";

function Navbar({ path }) {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [submenuPos, setSubmenuPos] = useState({});

  const handleSubmenuOpen = (e) => {
    e.preventDefault();
    const parent = e.target.getBoundingClientRect();
    // console.log(parent);
    const posX = (parent.left + parent.right) / 2 - parent.width / 2 + 10;
    const posY = parent.bottom + 8;
    setSubmenuPos({ posX, posY });
    setIsSubmenuOpen(!isSubmenuOpen);
  };
  return (
    <Nav>
      <NavLink to="/">
        <LogoIcon>
          <GiTreeBranch />
        </LogoIcon>
      </NavLink>
      <NavContent>
        <NavMenu>
          <NavLink to="/">首頁</NavLink>
          <NavBtn onClick={handleSubmenuOpen}>
            全台景點
            <BiCaretDown />
          </NavBtn>
          <NavLink to="/about">網站相關</NavLink>
        </NavMenu>
      </NavContent>

      {isSubmenuOpen ? (
        <Submenu submenuPos={submenuPos} setIsSubmenuOpen={setIsSubmenuOpen} />
      ) : null}
    </Nav>
  );
}

export default Navbar;
