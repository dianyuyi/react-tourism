import React, { useState, useRef, useEffect } from "react";
import { cityArea } from "../../data/cityArea";
import { SubContainer, SubFolderMenu } from "../../styles/submenu/submenu";
import { Link } from "react-router-dom";
import SecFolderItem from "./SecFolderItem";

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};
const variantsChild = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 100, velocity: -100 },
      delay: 0.1,
    },
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
      delay: 0.1,
    },
  },
};

const Submenu = ({ submenuPos, setIsSubmenuOpen, isSubmenuOpen }) => {
  const container = useRef(null);
  const [areaData, setAreaData] = useState({});
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [areaPos, setAreaPos] = useState(0);

  const handleFolderOpen = (e) => {
    e.preventDefault();
    const parent = e.target.getBoundingClientRect();
    const posY = parent.top - 51;
    setAreaPos(posY);

    const name = e.target.textContent;
    const data = cityArea.find((item) => item.area === name);
    setAreaData(data);
    setIsFolderOpen(true);
  };

  useEffect(() => {
    if (!isSubmenuOpen) {
      setIsFolderOpen(false);
      setAreaData({});
      setAreaPos(0);
    }
  }, [isSubmenuOpen]);

  return (
    <SubContainer
      ref={container}
      pos={submenuPos}
      variants={variants}
      initial={false}
      isOpen={isSubmenuOpen}
      animate={isSubmenuOpen ? "open" : "closed"}
    >
      {/* <SubFolderMenu
        variants={variantsChild}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseOver={handleFolderOpen}
      >
        <Link to="/scenicSpot">
          <p>全台景點</p>
        </Link>
      </SubFolderMenu> */}
      {cityArea.map((item) => {
        const { area, citys } = item;
        return (
          <SubFolderMenu
            key={area}
            variants={variantsChild}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onMouseOver={handleFolderOpen}
            className={`${area === areaData.area ? "active" : ""}`}
          >
            <p>{area}</p>
          </SubFolderMenu>
        );
      })}
      {areaData && isSubmenuOpen ? (
        <SecFolderItem
          areaData={areaData}
          isOpen={isFolderOpen}
          areaPos={areaPos}
          setIsSubmenuOpen={setIsSubmenuOpen}
        />
      ) : null}
    </SubContainer>
  );
};

export default Submenu;
