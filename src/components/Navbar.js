import React from "react";
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
  const [isSubmenuOpen, setIsSubmenuOpen] = React.useState(false);
  return (
    <Nav>
      <NavLink path={path} to="/">
        <LogoIcon>
          <GiTreeBranch />
        </LogoIcon>
      </NavLink>
      <NavContent>
        <NavMenu>
          <NavLink path={path} to="/">
            首頁
          </NavLink>
          <NavBtn onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}>
            全台景點
            <BiCaretDown />
          </NavBtn>
          <NavLink path={path} to="/about">
            網站相關
          </NavLink>
          {isSubmenuOpen ? "test" : null}
        </NavMenu>
      </NavContent>

      {isSubmenuOpen ? <Submenu /> : null}
    </Nav>
  );
}

export default Navbar;
