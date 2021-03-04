import React, { useState, useRef, useEffect } from "react";
import { cityArea } from "../../data/cityArea";
import {
  SubContainer,
  SubFolderMenu,
  SubFolderSec,
  SubFolderSecItem,
} from "../../styles/submenu/submenu";
import SecFolderItem from "./SecFolderItem";

const Submenu = ({ submenuPos, setIsSubmenuOpen }) => {
  const container = useRef(null);
  const [areaData, setAreaData] = useState({});
  const [isFolderOpen, setIsFolderOpen] = useState(false);
  const [areaPos, setAreaPos] = useState(0);

  // console.log(posX, posY);
  // console.log(container.current);

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
  const handleFolderClose = (e) => {
    setAreaPos(0);
    setAreaData({});
    setIsFolderOpen(false);
  };

  return (
    <SubContainer ref={container} pos={submenuPos}>
      {cityArea.map((item, index) => {
        const { area, citys } = item;
        return (
          <>
            <SubFolderMenu
              key={area}
              onMouseOver={handleFolderOpen}
              // onMouseOut={handleFolderClose}
              className={`${area === areaData.area ? "active" : ""}`}
            >
              <p>{area}</p>
              {/* <p>{citys}</p> */}
            </SubFolderMenu>

            {/* <SubFolderSec ref={secContainer}>
              <SubFolderSecItem
                key={citys.city.value}
                to={`/scenicSpot${citys.city.value}`}
              >
                {citys.city.name}
              </SubFolderSecItem>
              );
            </SubFolderSec> */}
          </>
        );
      })}
      {areaData ? (
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
