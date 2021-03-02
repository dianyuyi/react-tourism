import * as React from "react";
import { SideNavListItem, SideNavLink } from "./sidenavStyle";
import { citys } from "../../data/citys";

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

export const MenuItem = ({ toggle }) => {
  return (
    <>
      <SideNavListItem
        className="one-line top"
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink to="/">回首頁</SideNavLink>
      </SideNavListItem>

      <SideNavListItem
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink to="/scenicSpot">全台景點</SideNavLink>
      </SideNavListItem>
      {citys.map((city) => {
        return (
          <SideNavListItem
            key={city.value}
            onClick={toggle}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <SideNavLink to={`/scenicSpot/${city.value}`}>
              {city.name}
            </SideNavLink>
          </SideNavListItem>
        );
      })}
      <SideNavListItem
        className="one-line bottom"
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink to="/about">網站相關</SideNavLink>
      </SideNavListItem>
    </>
  );
};
