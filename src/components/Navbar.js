import React from "react";
import { Link } from "react-router-dom";
import {
  Nav,
  NavLink,
  NavContent,
  LogoIcon,
  NavMenu,
} from "../styles/navbar/nav";
import { GiTreeBranch } from "react-icons/gi";
import { citys } from "../data/citys";

function Navbar({ path }) {
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
          <NavLink path={path} to="/scenicSpot">
            縣市景點
          </NavLink>
          <NavLink path={path} to="/about">
            網站相關
          </NavLink>
          {citys.map((city, index) => {
            const path = {
              pathname: `/scenicSpot/${city.value}`,
              query: city.name,
            };
            return (
              <Link key={index} to={path}>
                {city.name}
              </Link>
            );
          })}
        </NavMenu>
      </NavContent>
    </Nav>
  );
}

export default Navbar;
