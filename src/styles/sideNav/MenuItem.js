import React from "react";
import {
  SideNavListItem,
  SideNavLink,
  SideNavSecondTitle,
} from "./sidenavStyle";
import SecondMenu from "./SecondMenu";
import { cityArea } from "../../data/cityArea";
import { MdCardTravel, MdInfo } from "react-icons/md";
import { GiTreeBranch } from "react-icons/gi";
import { BiCaretRight } from "react-icons/bi";

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
  const [isFolderOpen, setIsFolderOpen] = React.useState(false);
  return (
    <>
      <SideNavListItem
        className="top"
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink to="/">
          <GiTreeBranch />
          <span>返回搜尋</span>
        </SideNavLink>
      </SideNavListItem>

      <SideNavListItem
        onClick={() => setIsFolderOpen(!isFolderOpen)}
        isOpen={isFolderOpen}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink to="">
          <MdCardTravel />
          <span>全台景點</span>
        </SideNavLink>
      </SideNavListItem>
      {isFolderOpen ? (
        <>
          {/* <SideNavListItem
            onClick={toggle}
            variants={variants}
            className="folder"
          >
            <SideNavSecondTitle>
              <SideNavLink to="/scenicSpot" className="all-link">
                <span>全台景點</span>
                <BiCaretRight />
              </SideNavLink>
            </SideNavSecondTitle>
          </SideNavListItem> */}
          {cityArea.map((item) => {
            return <SecondMenu key={item.area} item={item} toggle={toggle} />;
          })}
        </>
      ) : null}
      <SideNavListItem
        className="bottom"
        onClick={toggle}
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <SideNavLink to="/about">
          <MdInfo />
          <span>網站相關</span>
        </SideNavLink>
      </SideNavListItem>
    </>
  );
};
