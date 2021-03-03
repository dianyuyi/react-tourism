import React, { useState } from "react";
import {
  SideNavListItem,
  SideNavLink,
  SideNavSecond,
  SideNavSecondTitle,
} from "./sidenavStyle";
import { BiCaretDown, BiCaretUp, BiCaretRight } from "react-icons/bi";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 100, velocity: -100 },
      delay: 0.3,
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      delay: 0.3,
    },
  },
};

const SecondMenu = ({ item, toggle }) => {
  const [isSecondOpen, setIsSecondOpen] = useState(false);

  const { area, citys, link } = item;
  return (
    <SideNavListItem
      className="folder"
      key={area}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <SideNavSecondTitle
        onClick={() => setIsSecondOpen(!isSecondOpen)}
        isOpen={isSecondOpen}
      >
        <p>{area}</p>
        {isSecondOpen ? <BiCaretUp /> : <BiCaretDown />}
      </SideNavSecondTitle>
      <SideNavSecond isOpen={isSecondOpen}>
        {citys.map((city) => {
          return (
            <SideNavLink
              className="folder-link"
              onClick={toggle}
              key={city.value}
              to={`/scenicSpot/${city.value}`}
            >
              {city.name}
            </SideNavLink>
          );
        })}
      </SideNavSecond>
    </SideNavListItem>
  );
};

export default SecondMenu;
